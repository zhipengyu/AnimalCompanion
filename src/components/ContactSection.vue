<template>
  <section class="contact section">
    <div class="container">
      <h2 class="section-title">联系我们</h2>
      <p class="section-subtitle">
        随时欢迎您的咨询，我们将竭诚为您提供专业服务
      </p>

      <div class="contact-content">
        <div class="contact-info">
          <h3>联系方式</h3>

          <div class="contact-item">
            <div class="contact-icon">
              <i class="fas fa-phone"></i>
            </div>
            <div class="contact-details">
              <h4>客服热线</h4>
              <p>400-123-4567</p>
              <p>工作时间：周一至周五 9:00-18:00</p>
            </div>
          </div>

          <div class="contact-item">
            <div class="contact-icon">
              <i class="fas fa-envelope"></i>
            </div>
            <div class="contact-details">
              <h4>邮箱地址</h4>
              <p>info@company.com</p>
              <p>support@company.com</p>
            </div>
          </div>

          <div class="contact-item">
            <div class="contact-icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <div class="contact-details">
              <h4>办公地址</h4>
              <p>北京市朝阳区建国路88号</p>
              <p>现代城SOHO A座 2001室</p>
            </div>
          </div>

          <div class="social-links">
            <h4>关注我们</h4>
            <div class="social-icons">
              <a href="#" class="social-icon">
                <i class="fab fa-weixin"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-weibo"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-qq"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="contact-form">
          <h3>在线留言</h3>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <input
                type="text"
                v-model="form.name"
                placeholder="您的姓名"
                required
                class="form-input"
              />
            </div>

            <div class="form-group">
              <input
                type="tel"
                v-model="form.phone"
                placeholder="联系电话"
                required
                class="form-input"
              />
            </div>

            <div class="form-group">
              <input
                type="email"
                v-model="form.email"
                placeholder="电子邮箱"
                required
                class="form-input"
              />
            </div>

            <div class="form-group">
              <select v-model="form.service" required class="form-input">
                <option value="">请选择咨询服务</option>
                <option value="development">技术开发</option>
                <option value="analysis">数据分析</option>
                <option value="security">安全服务</option>
                <option value="consulting">咨询培训</option>
                <option value="cloud">云服务</option>
                <option value="mobile">移动应用</option>
              </select>
            </div>

            <div class="form-group">
              <textarea
                v-model="form.message"
                placeholder="请详细描述您的需求..."
                rows="5"
                required
                class="form-input"
              ></textarea>
            </div>

            <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
              <i class="fas fa-paper-plane"></i>
              {{ isSubmitting ? '发送中...' : '发送留言' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
  data() {
    return {
      isSubmitting: false,
      form: {
        name: '',
        phone: '',
        email: '',
        service: '',
        message: ''
      }
    }
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true

      try {
        // 模拟表单提交
        await new Promise(resolve => setTimeout(resolve, 2000))

        // 重置表单
        this.form = {
          name: '',
          phone: '',
          email: '',
          service: '',
          message: ''
        }

        alert('留言发送成功！我们会尽快与您联系。')
      } catch (error) {
        alert('发送失败，请稍后重试。')
      } finally {
        this.isSubmitting = false
      }
    }
  }
}
</script>

<style scoped>
.contact {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.contact .section-title,
.contact .section-subtitle {
  color: white;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
}

.contact-info h3,
.contact-form h3 {
  font-size: 1.8rem;
  margin-bottom: 40px;
  font-weight: 600;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 40px;
}

.contact-icon {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.contact-details h4 {
  margin-bottom: 10px;
  font-weight: 600;
}

.contact-details p {
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin-bottom: 5px;
}

.social-links {
  margin-top: 40px;
}

.social-links h4 {
  margin-bottom: 20px;
  font-weight: 600;
}

.social-icons {
  display: flex;
  gap: 15px;
}

.social-icon {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.social-icon:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.contact-form {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.form-group {
  margin-bottom: 25px;
}

.form-input {
  width: 100%;
  padding: 15px 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.form-input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.form-input:focus {
  outline: none;
  border-color: rgba(255, 255, 255, 0.6);
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1);
}

.form-input option {
  background: #2c3e50;
  color: white;
}

textarea.form-input {
  resize: vertical;
  min-height: 120px;
}

.btn {
  width: 100%;
  justify-content: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
}

.btn:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 50px;
  }

  .contact-form {
    padding: 30px;
  }

  .social-icons {
    justify-content: center;
  }
}
</style>