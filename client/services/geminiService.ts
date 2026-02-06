const API_URL = 'http://localhost:3001/api';

export const generateTattooConcept = async (userIdea: string): Promise<string> => {
  try {
    const response = await fetch(`${API_URL}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userIdea }),
    });

    if (!response.ok) throw new Error('Network response was not ok');
    
    const data = await response.json();
    return data.response || "No se pudo generar una respuesta. Intenta de nuevo.";
  } catch (error) {
    console.error("Error generating tattoo concept:", error);
    return "Hubo un error al procesar tu idea. Por favor intenta más tarde.";
  }
};
