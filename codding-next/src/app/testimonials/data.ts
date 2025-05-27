export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
}

export const initialTestimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah ',
    role: 'Python Developer',
    image: '/assets/Avatar2.png',
    text: 'The Python course was incredibly well-structured and the instructors were always available to help. I landed my first developer job within a month of completing the course!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Ahmed',
    role: 'Backend Developer',
    image: '/assets/Avatar5.png',
    text: 'The advanced Python course gave me the skills I needed to build complex applications. The hands-on projects were particularly valuable for my career growth.',
    rating: 4,
  },
  {
    id: 3,
    name: 'Angle',
    role: 'Full Stack Developer',
    image: '/assets/Avatar9.png',
    text: "I came in with zero programming experience, and now I'm working as a full-stack developer. The curriculum is comprehensive and the community support is amazing.",
    rating: 5,
  },
];
