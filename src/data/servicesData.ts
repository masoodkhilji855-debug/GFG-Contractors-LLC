import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'emergency-leak-repair',
    title: 'Emergency Leak & Burst Pipe Repair',
    shortDesc: 'Rapid 24/7 dispatch for slab leaks, active ceiling leaks, frozen or ruptured water lines, and valve failures.',
    fullDesc: 'Water damage compounds by the minute. Our licensed emergency plumbers arrive equipped with advanced acoustic leak detection equipment and non-invasive repair solutions to isolate leaks and stop flooding fast across Montgomery.',
    features: [
      '30-45 Min Emergency Dispatch in Montgomery',
      'Electronic & Thermal Leak Detection',
      'Slab Leak & Hidden Pipe Containment',
      'Full Clean-up & Pipe Pressure Testing'
    ],
    imageUrl: 'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&w=800',
    iconName: 'Wrench',
    emergencyAvailable: true,
    estPrice: '$165 - $380+',
    estTime: '30-45 mins arrival'
  },
  {
    id: 'drain-cleaning-hydrojetting',
    title: 'Drain Cleaning & Hydro-Jetting',
    shortDesc: 'High-pressure water jetting and motorized snaking to eliminate stubborn grease, tree roots, and sediment.',
    fullDesc: 'From clogged kitchen sinks and backing-up toilets to complete main line blockages, we blast away severe obstructions without harsh chemicals that erode your PVC and cast iron pipes.',
    features: [
      'Commercial Grade 4000 PSI Hydro-Jetting',
      'HD Video Sewer Camera Diagnostics',
      'Tree Root & Heavy Scale Scouring',
      'Free Drain Flow Guarantee'
    ],
    imageUrl: 'https://images.pexels.com/photos/8486972/pexels-photo-8486972.jpeg?auto=compress&cs=tinysrgb&w=1200',
    iconName: 'Sparkles',
    emergencyAvailable: true,
    estPrice: '$125 - $290',
    estTime: 'Same Day'
  },
  {
    id: 'water-heater-repair-installation',
    title: 'Water Heater Repair & Installation',
    shortDesc: 'Expert repair, annual descaling, and new tankless or standard tank replacements with high-efficiency units.',
    fullDesc: 'No hot water? Leaking tank? Strange popping noises? We service all major gas, electric, and hybrid tankless water heaters (Rheem, AO Smith, Navien, Bradford White) with same-day emergency replacements.',
    features: [
      'Gas & Electric Tank Repair & Thermostats',
      'High-Efficiency Tankless Conversions',
      'Sediment Flush & Anode Rod Replacement',
      'Comprehensive 6-to-10 Year Manufacturer Warranties'
    ],
    imageUrl: 'https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=800',
    iconName: 'Flame',
    emergencyAvailable: true,
    estPrice: '$180 - $850+ (Installs vary)',
    estTime: 'Same Day'
  },
  {
    id: 'sewer-line-inspection-replacement',
    title: 'Sewer Line Inspection & Replacement',
    shortDesc: 'Trenchless sewer line repairs, video pipe inspections, and whole-house sewer line replacements.',
    fullDesc: 'Foul sewer odors or soggy spots in your yard indicate sewer line distress. We perform full color video camera inspections to locate collapsed clay pipes, offset joints, and tree intrusion without destroying your landscaping.',
    features: [
      'Color HD Fiber-Optic Scope with Footage Log',
      'Trenchless Pipe Relining & Spot Repairs',
      'Main Line Cleanout Additions',
      'City Main Connection Coordination'
    ],
    imageUrl: 'https://images.pexels.com/photos/8486937/pexels-photo-8486937.jpeg?auto=compress&cs=tinysrgb&w=600',
    iconName: 'Activity',
    emergencyAvailable: true,
    estPrice: '$195 - $1,200+',
    estTime: '24-48 hrs'
  },
  {
    id: 'commercial-plumbing-contracting',
    title: 'Commercial Plumbing & Contracting',
    shortDesc: 'Certified backflow testing, grease traps, ADA restrooms, and tenant buildout plumbing across Alabama.',
    fullDesc: 'We keep Montgomery restaurants, retail centers, warehouses, and medical facilities compliant and operational. From code compliance inspections to large-scale commercial piping installations, G F G Contractor handles it all.',
    features: [
      'Certified Backflow Preventer Testing & Repair',
      'Commercial Grease Trap Installations',
      'Multi-Stall ADA Restroom Rough-Ins',
      'Scheduled Preventive Maintenance Contracts'
    ],
    imageUrl: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
    iconName: 'Building2',
    emergencyAvailable: true,
    estPrice: 'Custom Bids & Estimates',
    estTime: 'Priority Dispatch'
  },
  {
    id: 'fixture-upgrades-remodeling',
    title: 'Fixture Upgrades & Remodeling',
    shortDesc: 'Premium faucet installations, modern toilets, garbage disposals, and whole-bathroom repiping.',
    fullDesc: 'Elevate the look and water efficiency of your home. Whether replacing a corroded garbage disposal, installing touchless fixtures, or repiping your entire home with PEX, our craft guarantees zero leaks.',
    features: [
      'Kitchen Faucet & Deep Sink Installations',
      'High-Efficiency Dual-Flush Toilets',
      'Garbage Disposal Repair & Installs',
      'PEX & Copper Re-piping Services'
    ],
    imageUrl: 'https://images.pexels.com/photos/6419125/pexels-photo-6419125.jpeg?auto=compress&cs=tinysrgb&w=600',
    iconName: 'Droplet',
    emergencyAvailable: false,
    estPrice: '$135 - $450+',
    estTime: 'Flexible Scheduling'
  }
];
