
export interface BusinessSector {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
