import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandTwitter,
  IconChevronDown,
  IconRss,
} from '@tabler/icons-react';
import { AnnouncementProps, FooterProps, HeaderProps } from '../types';

// Announcement data
export const announcementData: AnnouncementProps = {
  // title: 'New',
  callToAction: {
    text: 'Wondering if Therapy is Right for You? Click here to Schedule Your Free 15 Minute Consult Today!',
    href: 'https://nextjs.org/blog/next-14',
  },
  // callToAction2: {
  //   text: 'Follow @onWidget on Twitter',
  //   href: 'https://twitter.com/intent/user?screen_name=onwidget',
  // },
};

// Header data
export const headerData: HeaderProps = {
  links: [
    {
      label: 'Therapists',
      icon: IconChevronDown,
      links: [
        {
          label: 'Yiannoula Mavroidis',
          href: '/services',
        },
        {
          label: 'Melissa Kalinowski',
          href: '/pricing',
        },
        {
          label: 'Hayle Fisher',
          href: '/about',
        },
        
      ],
    },
    {
      label: 'Specialities',
      icon: IconChevronDown,
      links: [
        {
          label: 'Adolescent',
          href: '/services',
        },
        {
          label: 'College Students',
          href: '/pricing',
        },
        {
          label: 'Young Professionals',
          href: '/about',
        },
        {
          label: 'Eating Disorders & Body Positivity',
          href: '/contact', 
        }
      ],
    },
    {
      label: 'Services',
      icon: IconChevronDown,
      links: [
        {
          label: 'Individual Therapy',
          href: '/services',
        },
        {
          label: 'Supervision & Mentorship',
          href: '/pricing',
        },
        {
          label: 'Speaking Engagement & Partnerships',
          href: '/about',
        },
        
      ],
    },
    // {
    //   label: 'Pages',
    //   icon: IconChevronDown,
    //   links: [
    //     {
    //       label: 'Services',
    //       href: '/services',
    //     },
    //     {
    //       label: 'Pricing',
    //       href: '/pricing',
    //     },
    //     {
    //       label: 'About us',
    //       href: '/about',
    //     },
    //     {
    //       label: 'Contact us',
    //       href: '/contact',
    //     },
    //     {
    //       label: 'FAQs',
    //       href: '/faqs',
    //     },
    //     {
    //       label: 'Terms & Conditions',
    //       href: '/terms',
    //     },
    //     {
    //       label: 'Privacy Policy',
    //       href: '/privacy',
    //     },
    //   ],
    // },
    {
      label: 'Blog',
      href: '/blog',
    },
    {
      label: 'Contact',
      href: '/contact',
    },
  ],
  actions: [
    {
      text: 'Schedule an Appointment',
      href: 'https://github.com/onwidget/tailnext',
      targetBlank: true,
    },
  ],
  isSticky: true,
  showToggleTheme: false,
  showRssFeed: false,
  position: 'right',
};

// Footer data
export const footerData: FooterProps = {
  title: 'TailNext',
  links: [
    {
      label: 'Terms & Conditions',
      href: '/terms',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
  ],
  columns: [
    {
      title: 'Product',
      links: [
        {
          label: 'Features',
          href: '/',
        },
        {
          label: 'Security',
          href: '/',
        },
        {
          label: 'Team',
          href: '/',
        },
        {
          label: 'Enterprise',
          href: '/',
        },
        {
          label: 'Customer stories',
          href: '/',
        },
        {
          label: 'Pricing',
          href: '/pricing',
        },
        {
          label: 'Resources',
          href: '/',
        },
      ],
    },
    {
      title: 'Platform',
      links: [
        {
          label: 'Developer API',
          href: '/',
        },
        {
          label: 'Partners',
          href: '/',
        },
      ],
    },
    {
      title: 'Support',
      links: [
        {
          label: 'Docs',
          href: '/',
        },
        {
          label: 'Community Forum',
          href: '/',
        },
        {
          label: 'Professional Services',
          href: '/',
        },
        {
          label: 'Skills',
          href: '/',
        },
        {
          label: 'Status',
          href: '/',
        },
      ],
    },
    {
      title: 'Company',
      links: [
        {
          label: 'About',
          href: '/',
        },
        {
          label: 'Blog',
          href: '/blog',
        },
        {
          label: 'Careers',
          href: '/',
        },
        {
          label: 'Press',
          href: '/',
        },
        {
          label: 'Inclusion',
          href: '/',
        },
        {
          label: 'Social Impact',
          href: '/',
        },
        {
          label: 'Shop',
          href: '/',
        },
      ],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: '#' },
    { label: 'Instagram', icon: IconBrandInstagram, href: '#' },
    { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
    { label: 'RSS', icon: IconRss, href: '#' },
    { label: 'Github', icon: IconBrandGithub, href: 'https://github.com/onwidget/tailnext' },
  ],
  footNote: (
    <div className="mr-4 rtl:mr-0 rtl:ml-4 text-sm">
      <span className="float-left rtl:float-right mr-1.5 rtl:mr-0 rtl:ml-1.5 h-5 w-5 rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
      <span>
        Made by{' '}
        <a
          className="font-semibold text-slate-900 dark:text-gray-200 hover:text-blue-600 hover:underline dark:hover:text-blue-600"
          href="https://onwidget.com/"
        >
          {' '}
          onWidget
        </a>{' '}
        · All rights reserved.
      </span>
    </div>
  ),
};

// Footer2 data
export const footerData2: FooterProps = {
  links: [
    {
      label: 'Terms & Conditions',
      href: '/terms',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
  ],
  columns: [
    {
      title: 'Address',
      texts: ['51 Phasellus Avenue Maecenas', 'Aliquam, AQ 52098'],
    },
    {
      title: 'Phone',
      texts: ['Reception: +105 123 4567', 'Office: +107 235 7890'],
    },
    {
      title: 'Email',
      texts: ['Office: info@example.com', 'Site: https://example.com'],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: '#' },
    { label: 'Instagram', icon: IconBrandInstagram, href: '#' },
    { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
    { label: 'RSS', icon: IconRss, href: '#' },
    { label: 'Github', icon: IconBrandGithub, href: 'https://github.com/onwidget/tailnext' },
  ],
  footNote: (
    <div className="mr-4 rtl:mr-0 rtl:ml-4 text-sm">
      <span className="float-left rtl:float-right mr-1.5 rtl:mr-0 rtl:ml-1.5 h-5 w-5 rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
      <span>
        Made by{' '}
        <a
          className="font-semibold text-slate-900 dark:text-gray-200 hover:text-blue-600 hover:underline dark:hover:text-blue-600"
          href="https://onwidget.com/"
        >
          {' '}
          onWidget
        </a>{' '}
        · All rights reserved.
      </span>
    </div>
  ),
};
