
import { Code, Gamepad, Camera, Briefcase, Ticket, Cpu, Users } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface SubEvent {
  title: string;
  description: string;
  date: string;
  prize: number;
}

export interface EventCategory {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  number: string;
  teamSize: number;
  subEvents: SubEvent[];
}

export const eventCategories: EventCategory[] = [
  {
    id: 'hackathon',
    title: 'Hackathon',
    description: 'Code or be eliminated! A 24-hour coding marathon where only the best solutions survive.',
    icon: Code,
    color: 'bg-blue-500/20 text-blue-400',
    number: '456',
    teamSize: 4,
    subEvents: [
      {
        title: 'AI Revolutionary',
        description: 'Build AI solutions to solve real-world problems. Survival depends on your innovation.',
        date: 'April 4-5, 2023',
        prize: 50000
      },
      {
        title: 'Web3 Challenge',
        description: 'Create decentralized applications that could transform how people interact with technology.',
        date: 'April 4-5, 2023',
        prize: 40000
      },
      {
        title: 'Mobile Masters',
        description: 'Develop mobile applications with intuitive interfaces and powerful functionality.',
        date: 'April 4-5, 2023',
        prize: 35000
      }
    ]
  },
  {
    id: 'technical',
    title: 'Technical Events',
    description: 'Crack the challenge to proceed. A series of technical puzzles that will test your skills to the limit.',
    icon: Cpu,
    color: 'bg-purple-500/20 text-purple-400',
    number: '218',
    teamSize: 2,
    subEvents: [
      {
        title: 'Code Red',
        description: 'Competitive programming contest with elimination rounds. Only the fastest survive.',
        date: 'April 4, 2023',
        prize: 25000
      },
      {
        title: 'Debug or Die',
        description: 'Find and fix bugs in increasingly complex code before time runs out.',
        date: 'April 5, 2023',
        prize: 20000
      },
      {
        title: 'System Design Battle',
        description: 'Design scalable systems under pressure with limited resources.',
        date: 'April 5, 2023',
        prize: 30000
      }
    ]
  },
  {
    id: 'non-technical',
    title: 'Non-Technical Events',
    description: 'Fun games with high stakes. These events focus on creativity, teamwork, and thinking outside the box.',
    icon: Users,
    color: 'bg-yellow-500/20 text-yellow-400',
    number: '067',
    teamSize: 3,
    subEvents: [
      {
        title: 'Pitch Perfect',
        description: 'Present your ideas in front of VCs. Convince them or be eliminated.',
        date: 'April 4, 2023',
        prize: 15000
      },
      {
        title: 'Treasure Hunt',
        description: 'Find hidden QR codes across campus before others. Each scan reveals the next clue.',
        date: 'April 5, 2023',
        prize: 10000
      },
      {
        title: 'Quiz Master',
        description: 'Multi-round quiz with elimination after each round. Test your general and technical knowledge.',
        date: 'April 5, 2023',
        prize: 12000
      }
    ]
  },
  {
    id: 'gaming',
    title: 'Gaming',
    description: 'Inspired by deadly competitions. Show your gaming prowess in our high-intensity tournaments.',
    icon: Gamepad,
    color: 'bg-red-500/20 text-red-400',
    number: '001',
    teamSize: 1,
    subEvents: [
      {
        title: 'Valorant Tournament',
        description: 'Team-based 5v5 tactical shooter tournament. Last team standing wins.',
        date: 'April 4-5, 2023',
        prize: 20000
      },
      {
        title: 'FIFA Showdown',
        description: 'One-on-one football matches with knockout stages.',
        date: 'April 4, 2023',
        prize: 8000
      },
      {
        title: 'BGMI Battle Royale',
        description: 'Squad-based last team standing competition across multiple maps.',
        date: 'April 5, 2023',
        prize: 15000
      }
    ]
  },
  {
    id: 'photography',
    title: 'Photography',
    description: 'Capture the best moment or be eliminated! A contest where your lens becomes your weapon.',
    icon: Camera,
    color: 'bg-emerald-500/20 text-emerald-400',
    number: '199',
    teamSize: 1,
    subEvents: [
      {
        title: 'Campus Life',
        description: 'Capture the essence of student life on campus during the Phoenix event.',
        date: 'April 4-5, 2023',
        prize: 10000
      },
      {
        title: 'Tech in Action',
        description: 'Document technology being used in creative ways during the event.',
        date: 'April 4-5, 2023',
        prize: 8000
      },
      {
        title: 'Portrait Challenge',
        description: 'Capture the emotions and stories of participants during the events.',
        date: 'April 4-5, 2023',
        prize: 7000
      }
    ]
  },
  {
    id: 'management',
    title: 'Management',
    description: 'Plan like the Front Man, execute like the players. Test your management and leadership skills.',
    icon: Briefcase,
    color: 'bg-amber-500/20 text-amber-400',
    number: '101',
    teamSize: 3,
    subEvents: [
      {
        title: 'Crisis Management',
        description: 'Handle unexpected scenarios and make decisions under extreme pressure.',
        date: 'April 4, 2023',
        prize: 18000
      },
      {
        title: 'Stock Market Simulation',
        description: 'Trade virtual stocks with real-time market data. Highest returns win.',
        date: 'April 5, 2023',
        prize: 15000
      },
      {
        title: 'Marketing Mayhem',
        description: 'Create and pitch marketing campaigns for fictional products with limited resources.',
        date: 'April 5, 2023',
        prize: 20000
      }
    ]
  },
  {
    id: 'carnival',
    title: 'Carnival',
    description: 'A more lively, fun zone inspired by the Squid Game playground. Games, food, and festivities await.',
    icon: Ticket,
    color: 'bg-pink-500/20 text-pink-400',
    number: '212',
    teamSize: 2,
    subEvents: [
      {
        title: 'Red Light, Green Light',
        description: 'A tech-enabled version of the classic game with motion sensors.',
        date: 'April 4-5, 2023',
        prize: 5000
      },
      {
        title: 'Dalgona Challenge',
        description: 'Extract shapes from honeycomb candy without breaking the pattern.',
        date: 'April 4-5, 2023',
        prize: 3000
      },
      {
        title: 'Tug of War',
        description: 'Team-based competition of strength and strategy.',
        date: 'April 4-5, 2023',
        prize: 7000
      }
    ]
  }
];
