<template>
  <footer class="footer">
    <div class="footer-main">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <div class="footer-logo">
              <img src="/logo.png" alt="Logo" class="footer-logo-img" />
              <span class="footer-logo-text">企业名称</span>
            </div>
            <p class="footer-description">
              专业的技术服务提供商，致力于为客户创造价值，
              以创新技术推动行业发展，共建美好数字化未来。
            </p>
            <div class="footer-social">
              <a href="#" class="social-link">
                <i class="fab fa-weixin"></i>
              </a>
              <a href="#" class="social-link">
                <i class="fab fa-weibo"></i>
              </a>
              <a href="#" class="social-link">
                <i class="fab fa-qq"></i>
              </a>
              <a href="#" class="social-link">
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div class="footer-section">
            <h4 class="footer-title">服务项目</h4>
            <ul class="footer-links">
              <li><router-link to="/services">技术开发</router-link></li>
              <li><router-link to="/services">数据分析</router-link></li>
              <li><router-link to="/services">安全服务</router-link></li>
              <li><router-link to="/services">咨询培训</router-link></li>
              <li><router-link to="/services">云服务</router-link></li>
              <li><router-link to="/services">移动应用</router-link></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4 class="footer-title">公司信息</h4>
            <ul class="footer-links">
              <li><router-link to="/about">关于我们</router-link></li>
              <li><router-link to="/about">发展历程</router-link></li>
              <li><router-link to="/about">团队介绍</router-link></li>
              <li><router-link to="/about">企业文化</router-link></li>
              <li><router-link to="/about">资质荣誉</router-link></li>
              <li><router-link to="/about">新闻动态</router-link></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4 class="footer-title">联系我们</h4>
            <div class="footer-contact">
              <div class="contact-item">
                <i class="fas fa-phone"></i>
                <span>400-123-4567</span>
              </div>
              <div class="contact-item">
                <i class="fas fa-envelope"></i>
                <span>info@company.com</span>
              </div>
              <div class="contact-item">
                <i class="fas fa-map-marker-alt"></i>
                <span>北京市朝阳区建国路88号现代城SOHA A座 2001室</span>
              </div>
              <div class="contact-item">
                <i class="fas fa-clock"></i>
                <span>周一至周五 9:00-18:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <div class="footer-bottom-content">
          <div class="footer-copyright">
            <p>&copy; 2023 企业名称. 版权所有</p>
            <p>京ICP备12345678号-1</p>
          </div>

          <div class="footer-links-bottom">
            <a href="#">隐私政策</a>
            <a href="#">使用条款</a>
            <a href="#">网站地图</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
.footer {
  background: #2c3e50;
  color: white;
  margin-top: auto;
}

.footer-main {
  padding: 60px 0 40px;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 50px;
}

.footer-section {
  display: flex;
  flex-direction: column;
}

.footer-logo {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.footer-logo-img {
  height: 40px;
  margin-right: 10px;
}

.footer-logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-description {
  color: #bdc3c7;
  line-height: 1.8;
  margin-bottom: 25px;
}

.footer-social {
  display: flex;
  gap: 15px;
}

.social-link {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: rgba(102, 126, 234, 0.3);
  transform: translateY(-2px);
}

.footer-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 25px;
  color: white;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-links a {
  color: #bdc3c7;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #667eea;
}

.footer-contact {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: #bdc3c7;
  line-height: 1.6;
}

.contact-item i {
  color: #667eea;
  margin-top: 2px;
  width: 16px;
  flex-shrink: 0;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 25px 0;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.footer-copyright {
  color: #95a5a6;
}

.footer-copyright p {
  margin: 0;
  font-size: 0.9rem;
}

.footer-links-bottom {
  display: flex;
  gap: 30px;
}

.footer-links-bottom a {
  color: #95a5a6;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.footer-links-bottom a:hover {
  color: #667eea;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
  }

  .footer-links-bottom {
    justify-content: center;
  }

  .footer-social {
    justify-content: center;
  }
}

@media (max-width: 992px) and (min-width: 769px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
}
</style>