import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? process.env.FRONTEND_URL || 'https://qualipro-frontend.onrender.com'
    : 'http://localhost:3000',
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, company, message, serviceType } = req.body;
    
    // Here you would typically save to database and send email
    console.log('Contact form submission:', { name, email, phone, company, message, serviceType });
    
    res.json({ 
      success: true, 
      message: 'Thank you for your inquiry. We will get back to you soon!' 
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Sorry, there was an error submitting your inquiry. Please try again.' 
    });
  }
});

// Services endpoint
app.get('/api/services', (req, res) => {
  const services = [
    {
      id: 1,
      title: 'NABH Certification & Accreditation',
      description: 'Complete NABH certification support from gap assessment to successful accreditation.',
      icon: 'award',
      features: ['Gap Assessment', 'Documentation Support', 'Staff Training', 'Mock Assessments']
    },
    {
      id: 2,
      title: 'Healthcare Quality Consulting',
      description: 'Expert consulting services to improve healthcare quality and patient safety.',
      icon: 'stethoscope',
      features: ['Quality Improvement', 'Process Optimization', 'Risk Management', 'Compliance Audits']
    },
    {
      id: 3,
      title: 'Digital Health Solutions',
      description: 'Modern technology solutions for healthcare management and certification tracking.',
      icon: 'smartphone',
      features: ['Digital Documentation', 'Compliance Tracking', 'Analytics Dashboard', 'Mobile Solutions']
    },
    {
      id: 4,
      title: 'Training & Development',
      description: 'Comprehensive training programs for healthcare professionals and staff.',
      icon: 'book',
      features: ['NABH Training', 'Quality Workshops', 'Leadership Development', 'Certification Programs']
    }
  ];
  
  res.json(services);
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📱 Health check: http://localhost:${PORT}/api/health`);
});

export default app;