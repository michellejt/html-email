const EmailTemplate = () => {
  return `
      <div style="width: 100%; max-width: 600px; margin: auto; padding: 20px; font-family: Arial, sans-serif; color: #333; background-color:#f4f4f4;">
        
        <!-- Header Banner -->
        <div style="width: 100%; text-align: center;">
          <img src="https://cdn.pixabay.com/photo/2016/10/27/23/42/heart-1776810_1280.jpg" alt="Crafting on Saturdays Banner" style="width: 100%; height: auto; border-radius: 8px;"/>
        </div>
  
        <h1 style="color: #444; text-align: center;">Crafting on Saturdays</h1>
        <p style="color: #555; text-align: center;">Every Saturday, we gather together to create beautiful, handmade projects. Whether you’re a beginner or a seasoned crafter, there’s always something new to learn and share. Join us and let’s craft something amazing!</p>
  
        <h2 style="color: #444; margin-top: 30px; text-align: center;">Saturday Crafting Inspiration</h2>
        <p style="color: #555; text-align: center;">Here are a few fun ideas for your next crafting session!</p>
  
        <!-- Card Grid (2x2) -->
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-top: 20px;">
        <!-- Card 1 -->
        <a href="https://example.com/diy-painted-pots" style="text-decoration: none;">
            <div style="border: 1px solid #ddd; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
            <img src="https://cdn.pixabay.com/photo/2018/09/01/03/49/flower-pot-3646013_1280.jpg" alt="Card 1 Image" style="width: 100%; height: 150px; object-fit: cover;"/>
            <div style="padding: 15px;">
                <h3 style="font-size: 18px; color: #333;">DIY Painted Pots</h3>
                <p style="color: #666;">Transform simple terracotta pots with colorful designs for a bright and cheerful garden.</p>
            </div>
            </div>
        </a>
        
        <!-- Card 2 -->
        <a href="https://example.com/knitted-scarves" style="text-decoration: none;">
            <div style="border: 1px solid #ddd; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
            <img src="https://cdn.pixabay.com/photo/2015/03/24/19/51/teddy-bear-688091_1280.jpg" alt="Card 2 Image" style="width: 100%; height: 150px; object-fit: cover;"/>
            <div style="padding: 15px;">
                <h3 style="font-size: 18px; color: #333;">Knitted Scarves</h3>
                <p style="color: #666;">Learn to knit a cozy scarf in your favorite colors. Perfect for winter weekends!</p>
            </div>
            </div>
        </a>
        
        <!-- Card 3 -->
        <a href="https://example.com/handmade-candles" style="text-decoration: none;">
            <div style="border: 1px solid #ddd; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
            <img src="https://cdn.pixabay.com/photo/2015/11/03/16/59/candle-1021137_1280.jpg" alt="Card 3 Image" style="width: 100%; height: 150px; object-fit: cover;"/>
            <div style="padding: 15px;">
                <h3 style="font-size: 18px; color: #333;">Handmade Candles</h3>
                <p style="color: #666;">Craft your own scented candles for a relaxing atmosphere at home.</p>
            </div>
            </div>
        </a>
        
        <!-- Card 4 -->
        <a href="https://example.com/crochet-amigurumi" style="text-decoration: none;">
            <div style="border: 1px solid #ddd; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
            <img src="https://cdn.pixabay.com/photo/2017/08/31/01/23/amigurumi-2699162_1280.jpg" alt="Card 4 Image" style="width: 100%; height: 150px; object-fit: cover;"/>
            <div style="padding: 15px;">
                <h3 style="font-size: 18px; color: #333;">Crochet Amigurumi</h3>
                <p style="color: #666;">Create cute and quirky crochet figures. The perfect project for any crafting enthusiast!</p>
            </div>
            </div>
        </a>
        </div>

  
        <!-- Footer -->
        <div style="text-align: center; margin-top: 40px; padding: 20px; color: #333333; background-color: #99CCCC">
          <p style="font-size: 14px; margin-bottom: 40px; ">Crafting on Saturdays | 123 Craft Street, Crafting City</p>
          <p style="font-size: 12px;">You are receiving this email because you signed up for our weekly crafting updates.</p>
          <p style="font-size: 12px; margin-top: 10px">If you no longer wish to receive emails, you can <a href="#" style="color: #003333; border-bottom: 2px dotted #444;">unsubscribe here</a>.</p>
        </div>
  
        <!-- Responsive design styles for small screens -->
        <style>
          @media (max-width: 600px) {
            .card-grid {
              grid-template-columns: 1fr !important;
            }
            h1 {
              font-size: 24px;
            }
            p {
              font-size: 14px;
            }
            .footer-text {
              font-size: 12px;
            }
          }
        </style>
  
      </div>
    `;
};

export default EmailTemplate;
