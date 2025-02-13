const EmailTemplate = () => {
  return `
      <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td align="center">
              <table width="600" bgcolor="#ffffff" cellpadding="1" cellspacing="0" style="max-width: 600px; width: 100%; border-radius: 5px; box-shadow: 0px 2px 10px rgba(0,0,0,0.1);">
                <tr>
                  <td align="center">
                    <img src="https://cdn.pixabay.com/photo/2016/10/27/23/42/heart-1776810_1280.jpg" alt="Crafting on Saturdays" style="width: 100%; height: auto; border-radius: 8px;">
                  </td>
                </tr>
                <tr>
                  <td style="padding: 20px; text-align: center;">
                    <h1 style="color: #444; margin: 10px 0;">Crafting on Saturdays</h1>
                    <p style="color: #555; font-size: 16px;">Every Saturday, we gather to create handmade projects. Whether you’re a beginner or a seasoned crafter, join us and let’s craft something amazing! 
                      <a href="https://example.com" style="color: #003333; text-decoration: underline;">Visit our website</a>.
                    </p>
                  </td>
                </tr>

                <!-- Cards Grid -->
                <tr>
                  <td align="center">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="50%" style="padding: 10px;">
                          <table width="100%" cellpadding="0" cellspacing="0" style="border: 1px solid #ddd; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
                            <tr>
                              <td align="center">
                                <img src="https://cdn.pixabay.com/photo/2018/09/01/03/49/flower-pot-3646013_1280.jpg" alt="DIY Painted Pots" style="width: 100%; height: auto;">
                              </td>
                            </tr>
                            <tr>
                              <td style="padding: 15px; text-align: center;">
                                <h3 style="font-size: 18px; color: #333; margin-bottom: 10px;">DIY Painted Pots</h3>
                                <p style="color: #666;">Transform simple terracotta pots with colorful designs.</p>
                                <a href="https://example.com/diy-painted-pots" style="color: #0073e6; text-decoration: underline;">Learn more</a>
                              </td>
                            </tr>
                          </table>
                        </td>

                        <td width="50%" style="padding: 10px;">
                          <table width="100%" cellpadding="0" cellspacing="0" style="border: 1px solid #ddd; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
                            <tr>
                              <td align="center">
                                <img src="https://cdn.pixabay.com/photo/2015/03/24/19/51/teddy-bear-688091_1280.jpg" alt="Knitted Scarves" style="width: 100%; height: auto;">
                              </td>
                            </tr>
                            <tr>
                              <td style="padding: 15px; text-align: center;">
                                <h3 style="font-size: 18px; color: #333; margin-bottom: 10px;">Knitted Scarves</h3>
                                <p style="color: #666;">Learn to knit a cozy scarf in your favorite colors.</p>
                                <a href="https://example.com/knitted-scarves" style="color: #0073e6; text-decoration: underline;">Learn more</a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      <tr>
                        <td width="50%" style="padding: 10px;">
                          <table width="100%" cellpadding="0" cellspacing="0" style="border: 1px solid #ddd; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
                            <tr>
                              <td align="center">
                                <img src="https://cdn.pixabay.com/photo/2015/11/03/16/59/candle-1021137_1280.jpg" alt="Handmade Candles" style="width: 100%; height: auto;">
                              </td>
                            </tr>
                            <tr>
                              <td style="padding: 15px; text-align: center;">
                                <h3 style="font-size: 18px; color: #333; margin-bottom: 10px;">Handmade Candles</h3>
                                <p style="color: #666;">Craft your own scented candles for a relaxing atmosphere.</p>
                                <a href="https://example.com/handmade-candles" style="color: #0073e6; text-decoration: underline;">Learn more</a>
                              </td>
                            </tr>
                          </table>
                        </td>

                        <td width="50%" style="padding: 10px;">
                          <table width="100%" cellpadding="0" cellspacing="0" style="border: 1px solid #ddd; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
                            <tr>
                              <td align="center">
                                <img src="https://cdn.pixabay.com/photo/2024/04/03/14/10/macrame-8673119_1280.jpg" alt="Macrame Wall Art" style="width: 100%; height: auto;">
                              </td>
                            </tr>
                            <tr>
                              <td style="padding: 15px; text-align: center;">
                                <h3 style="font-size: 18px; color: #333; margin-bottom: 10px;">Macrame Wall Art</h3>
                                <p style="color: #666;">Create beautiful wall hangings with macrame techniques.</p>
                                <a href="https://example.com/macrame-wall-art" style="color: #0073e6; text-decoration: underline;">Learn more</a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                    </table>
                  </td>
                </tr>

                <tr>
                  <td align="center" bgcolor="#99CCCC" style="padding: 20px; color: #333;">
                    <p style="font-size: 14px;">Crafting on Saturdays | 123 Craft Street, Crafting City</p>
                    <p style="font-size: 12px;">You are receiving this email because you signed up for our weekly updates.</p>
                    <p style="font-size: 12px;">
                      If you wish to unsubscribe, 
                      <a href="#" style="color: #003333; border-bottom: 2px dotted #444;">click here</a>.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
    `;
};

export default EmailTemplate;
