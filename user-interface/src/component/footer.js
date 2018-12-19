import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
        <div style={{backgroundColor: 'white'}}>
            <div class="flex-module" >
                <div class="flex-module-inner js-items-container" >
                    <ul class="u-cf" >
                        <li class="Footer-item Footer-copyright copyright">© 2018 Twitter</li>
                        <li class="Footer-item"><a class="Footer-link" href="/about" rel="noopener">Giới thiệu</a></li>
                        <li class="Footer-item"><a class="Footer-link" href="//support.twitter.com" rel="noopener">Trung tâm trợ giúp</a></li>
                        <li class="Footer-item"><a class="Footer-link" href="/tos" rel="noopener">Điều khoản</a></li>
                        <li class="Footer-item"><a class="Footer-link" href="/privacy" rel="noopener">Chính sách riêng tư</a></li>
                        <li class="Footer-item"><a class="Footer-link" href="//support.twitter.com/articles/20170514" rel="noopener">Cookie</a></li>
                        <li class="Footer-item"><a class="Footer-link" href="//support.twitter.com/articles/20170451" rel="noopener">Thông tin quảng cáo</a></li>
                        <li class="Footer-item"><a class="Footer-link" href="//about.twitter.com/press/brand-assets" rel="noopener">Thương hiệu</a></li>
                        <li class="Footer-item"><a class="Footer-link" href="https://blog.twitter.com" rel="noopener">Blog</a></li>
                        <li class="Footer-item"><a class="Footer-link" href="http://status.twitter.com" rel="noopener">Trạng thái</a></li>
                        <li class="Footer-item"><a class="Footer-link" href="https://about.twitter.com/products" rel="noopener">Ứng dụng</a></li>
                        <li class="Footer-item"><a class="Footer-link" href="https://about.twitter.com/careers" rel="noopener">Việc làm</a></li>
                        <li class="Footer-item"><a class="Footer-link" href="https://marketing.twitter.com" rel="noopener">Marketing</a></li>
                        <li class="Footer-item"><a class="Footer-link" href="https://business.twitter.com" rel="noopener">Doanh nghiệp</a></li>
                        <li class="Footer-item"><a class="Footer-link" href="//dev.twitter.com" rel="noopener">Nhà phát triển</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
  }
}

export default Footer;