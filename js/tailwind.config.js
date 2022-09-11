tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "#F40404",
        secondary: "#F0F0F0",
        rapid: '#6C6C6C',
        white_light: "rgba(255, 255, 255, 0.5)",
        yellow_line: "#FFB800",
        gray: "#282828",
        light_gray: "#5C6A92",
        overlay_color: 'rgba(0, 0, 0, 0.6)',
        footer_color: '#1F1F1F'
      },
      fontFamily: {
        my_font: ['Poppins', 'sans-serif']
      },
      maxWidth: {
        container: '1140px',
        large_container: '1920px'
      },
      backgroundImage: {
        'banner_img': "url('images/banner.jpg')",
        'service_one_img': "url('images/service_1.png')",
        'service_two_img': "url('images/service_2.png')",
        'service_three_img': "url('images/service_3.png')",
        'company_img': "url('images/company.png')",
        'blog_one_img': "url('images/blog_1.png')",
        'blog_two_img': "url('images/blog_2.png')",
        'blog_three_img': "url('images/blog_3.png')",
      }
    }
  },
};
