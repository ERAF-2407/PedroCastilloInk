export interface GalleryItem {
  id: number;
  imageUrl: string;
  category: 'realismo' | 'blackwork' | 'retrato';
  title: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
