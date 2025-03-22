import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form API endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body against schema
      const result = insertContactMessageSchema.safeParse(req.body);
      
      if (!result.success) {
        const errorMessage = fromZodError(result.error).message;
        return res.status(400).json({
          message: errorMessage
        });
      }
      
      // Store the contact message
      const contactMessage = await storage.createContactMessage(result.data);
      
      return res.status(201).json({
        message: "Contact message received successfully",
        id: contactMessage.id
      });
    } catch (error) {
      console.error("Error saving contact message:", error);
      return res.status(500).json({
        message: "An error occurred while processing your request"
      });
    }
  });

  // Get all contact messages - for admin purposes
  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getAllContactMessages();
      return res.status(200).json(messages);
    } catch (error) {
      console.error("Error retrieving contact messages:", error);
      return res.status(500).json({
        message: "An error occurred while retrieving contact messages"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
