2) certifications

Endpoint: GET /api/certifications?lang=es

Genera el seeder en mongodb

Ejemplo y su equivalente en ingles:

{
  "lang": "es",
  "title": "Certificaciones",
  "description": "Certificaciones profesionales y formaciones relevantes.",
  "certifications": [
    {
      "image": "/images/cert-ai-102.png",
      "title": "Azure AI Engineer Associate",
      "description": "Certificación en servicios de IA en Azure.",
      "link": "https://www.microsoft.com/verify/ai-102",
      "category": "certification"
    },
    {
      "image": "/images/cert-az-204.png",
      "title": "Azure Developer Associate",
      "description": "Desarrollo y despliegue en Azure.",
      "link": "https://www.microsoft.com/verify/az-204",
      "category": "certification"
    },
    {
      "image": "/images/cert-docker.png",
      "title": "Docker Certified Associate",
      "description": "Capacitación en contenedores y orquestación.",
      "link": "https://example.com/docker-cert",
      "category": "tool"
    }
  ]
}



implementar otra estructura para el contact, con placeholder


podes hacer el update del endpoint del /api/pricing