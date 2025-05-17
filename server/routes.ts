import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import express from "express";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve the static assets for Font Awesome
  app.use("/webfonts", express.static(path.join(process.cwd(), "public", "webfonts")));
  
  // Load Font Awesome CSS
  app.get("/css/fontawesome.min.css", (req, res) => {
    res.sendFile(path.join(process.cwd(), "public", "css", "fontawesome.min.css"));
  });

  // API route to get company information
  app.get("/api/company", (req, res) => {
    res.json({
      name: "Soil Soft Technologies Pvt. Ltd.",
      tagline: "Smart Tech. Local Roots. Global Reach.",
      founded: "Jan 22, 2024",
      location: "Ponnur, Guntur District, Andhra Pradesh",
      website: "www.soilsoft.ai",
      team: "10 Full-Time Employees (All from AP)",
      interns: "30+ | Currently Active: 5+"
    });
  });

  // API route to get product information
  app.get("/api/products", (req, res) => {
    res.json({
      flagship: {
        name: "APIGen",
        tagline: "Next-Gen API Testing Platform",
        description: "AI-powered, enterprise-grade, saves 60% of QA cost"
      },
      future: [
        {
          name: "HomeTown",
          description: "All-in-one platform for food, services, event bookings, and local shopping."
        },
        {
          name: "Knowledge Quest",
          description: "Affordable research-based learning from STEM to higher education."
        },
        {
          name: "StyleWear",
          description: "AI-powered app for personalized style suggestions, wardrobe planner, and eCom integration."
        },
        {
          name: "Photogenic",
          description: "Not an editor – a service aggregator like Swiggy for photographers + editors."
        }
      ]
    });
  });

  // API route to get revenue forecast
  app.get("/api/revenue", (req, res) => {
    res.json({
      forecast: [
        { product: "APIGen", year2024: "5L", year2025: "30L", year2026: "1.2Cr" },
        { product: "HomeTown", year2024: "0", year2025: "15L", year2026: "60L" },
        { product: "Knowledge Quest", year2024: "0", year2025: "5L", year2026: "40L" },
        { product: "Photogenic", year2024: "0", year2025: "8L", year2026: "50L" }
      ],
      total2026: "₹2.7 Cr"
    });
  });

  // API route for contact information
  app.get("/api/contact", (req, res) => {
    res.json({
      phone: "+91 79899 79264",
      email: "connect@soilsoft.ai",
      website: "www.soilsoft.ai"
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
