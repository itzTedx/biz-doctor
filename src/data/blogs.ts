export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: number;
  publishedAt: string;
  updatedAt: string;
  author: {
    name: string;
    bio: string;
    avatar: string;
  };
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  tags: string[];
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "cash-flow-optimization",
    title: "5 Strategies to Optimize Your Business Cash Flow",
    slug: "5-strategies-optimize-business-cash-flow",
    excerpt: "Learn proven strategies to improve your business cash flow management and ensure sustainable growth.",
    content: "Professional UX/UI design helps small businesses build trust, improve user experience, and boost conversions. Investing in design ensures a strong first impression, sets you apart from competitors, and creates a foundation for long-term growth.",
    category: "Finance",
    readTime: 6,
    publishedAt: "2024-01-15",
    updatedAt: "2024-01-15",
    author: {
      name: "BizDoctor Team",
      bio: "Expert business consultants with 30+ years of experience",
      avatar: "/images/authors/bizdoctor-team.webp"
    },
    image: {
      src: "/images/blogs/cash-flow.webp",
      alt: "Business cash flow optimization strategies dashboard showing financial metrics and growth charts",
      width: 800,
      height: 600
    },
    tags: ["cash flow", "finance", "business growth", "financial planning"],
    featured: true
  },
  {
    id: "ux-ui-design-investment",
    title: "Why Small Businesses Should Invest in Professional UX/UI Design",
    slug: "why-small-businesses-invest-professional-ux-ui-design",
    excerpt: "Discover how professional design can transform your small business and drive customer engagement.",
    content: "Professional UX/UI design helps small businesses build trust, improve user experience, and boost conversions. Investing in design ensures a strong first impression, sets you apart from competitors, and creates a foundation for long-term growth.",
    category: "Marketing",
    readTime: 6,
    publishedAt: "2024-01-10",
    updatedAt: "2024-01-10",
    author: {
      name: "BizDoctor Team",
      bio: "Expert business consultants with 30+ years of experience",
      avatar: "/images/authors/bizdoctor-team.webp"
    },
    image: {
      src: "/images/blogs/website.webp",
      alt: "Modern website design interface showing user experience improvements and conversion optimization",
      width: 800,
      height: 600
    },
    tags: ["UX design", "UI design", "small business", "digital marketing", "conversion"],
    featured: false
  },
  {
    id: "startup-mistakes-avoid",
    title: "5 Common Mistakes Startups Make (and How to Avoid Them)",
    slug: "5-common-mistakes-startups-make-how-avoid",
    excerpt: "Avoid these critical startup mistakes that can derail your business growth and success.",
    content: "Starting a business is challenging, and many entrepreneurs make common mistakes that can be easily avoided with proper planning and guidance.",
    category: "Finance",
    readTime: 5,
    publishedAt: "2024-01-05",
    updatedAt: "2024-01-05",
    author: {
      name: "BizDoctor Team",
      bio: "Expert business consultants with 30+ years of experience",
      avatar: "/images/authors/bizdoctor-team.webp"
    },
    image: {
      src: "/images/blogs/mistake-avoid.webp",
      alt: "Startup business planning checklist with common mistakes highlighted and solutions provided",
      width: 800,
      height: 600
    },
    tags: ["startup", "business planning", "entrepreneurship", "mistakes", "growth"],
    featured: false
  },
  {
    id: "brand-identity-2025",
    title: "Why a Strong Brand Identity Matters More Than Ever in 2025",
    slug: "strong-brand-identity-matters-2025",
    excerpt: "Learn why brand identity is crucial for business success in the competitive 2025 market landscape.",
    content: "In today's competitive market, a strong brand identity is more important than ever for business success and customer recognition.",
    category: "Marketing",
    readTime: 6,
    publishedAt: "2024-01-01",
    updatedAt: "2024-01-01",
    author: {
      name: "BizDoctor Team",
      bio: "Expert business consultants with 30+ years of experience",
      avatar: "/images/authors/bizdoctor-team.webp"
    },
    image: {
      src: "/images/blogs/brand.webp",
      alt: "Brand identity design elements including logo, colors, typography, and brand guidelines for 2025",
      width: 800,
      height: 600
    },
    tags: ["brand identity", "branding", "marketing", "2025 trends", "business strategy"],
    featured: false
  },
  {
    id: "supply-chain-trends-2025",
    title: "Supply Chain Management in 2025: Trends You Can't Ignore",
    slug: "supply-chain-management-2025-trends",
    excerpt: "Stay ahead with the latest supply chain management trends and technologies shaping 2025.",
    content: "Supply chain management is evolving rapidly with new technologies and trends that businesses must adapt to remain competitive.",
    category: "Supply Chain",
    readTime: 6,
    publishedAt: "2023-12-28",
    updatedAt: "2023-12-28",
    author: {
      name: "BizDoctor Team",
      bio: "Expert business consultants with 30+ years of experience",
      avatar: "/images/authors/bizdoctor-team.webp"
    },
    image: {
      src: "/images/blogs/trend.webp",
      alt: "Supply chain management dashboard showing 2025 trends, analytics, and optimization strategies",
      width: 800,
      height: 600
    },
    tags: ["supply chain", "logistics", "2025 trends", "technology", "optimization"],
    featured: false
  }
];

export const getFeaturedBlogs = (): BlogPost[] => {
  return blogPosts.filter(post => post.featured);
};

export const getBlogsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category.toLowerCase() === category.toLowerCase());
};

export const getBlogBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};
