# BruinPlanner

## Embedding-Based Course Recommendation System

Developed to explore retrieval-augmented recommendation systems for personalized UCLA course planning.

A semantic recommendation pipeline that matches student academic interests to relevant coursework using transformer embeddings and vector similarity search.

---

## What I Built

- Structured input parsing for required and elective course lists
- Transformer-based embedding pipeline for course descriptions and user academic interest summaries
- Vector storage and cosine similarity retrieval using Pinecone
- Top-k ranking of semantically similar courses
- Constraint-aware filtering to enforce academic requirements
- LLM-based synthesis layer to generate structured recommendations
- Keyword baseline implementation for retrieval comparison

---

## Results

- Improved top-3 recommendation relevance compared to keyword search
- Reduced irrelevant matches for interdisciplinary interests
- Demonstrated modular separation between retrieval and generation stages
- Built scalable vector indexing pipeline for semantic search

---

## Tech Stack

Python · Transformer Embeddings · Pinecone · API · Jupyter · Retrieval-Augmented Generation (RAG) Architecture