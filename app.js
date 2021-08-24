function showLogin() {
    var bodyElement = document.querySelector("body");
    var modalElement = document.createElement("div");
    modalElement.classList.add("modal");
    modalElement.innerHTML = `
    <div class="modal__overlay"></div>
    <div class="modal__body">
        <div class="auth-form">
            <div class="auth-form__container">
                <div class="auth-form__header">
                    <h3 class="auth-form__heading">Đăng nhập</h3>
                    <span class="auth-form__switch-btn">Đăng ký</span>
                </div>

                <div class="auth-form__form">
                    <div class="auth-form__group">
                        <input type="text" class="auth-form__input" placeholder="Email của bạn">
                    </div>
                    <div class="auth-form__group">
                        <input type="password" class="auth-form__input" placeholder="Mật khẩu của bạn">
                    </div>
                </div>

                <div class="auth-form__aside">
                    <span class="auth-form__help">
                        <a href="" class="auth-form__help-link auth-form__help-forgot">Quên mật khẩu</a>
                        <a href="" class="auth-form__help-link">Cần trợ giúp?</a>
                    </span>
                </div>

                <div class="auth-form__control">
                    <button class="btn btn--normal">TRỞ LẠI</button>
                    <button class="btn btn--primary">ĐĂNG NHẬP</button>
                </div>
            </div>

            <div class="auth-form__social">
                <a href="" class="auth-form__social-facebook btn btn--with-icon"><i
                        class="auth-form__social-icon fab fa-facebook-square"></i>
                    <span class="auth-form__social-title">Kết nối với Facebook</span>
                </a>
                <a href="" class="auth-form__social-google btn btn--with-icon"><i
                        class="auth-form__social-icon fab fa-google"></i>
                    <span class="auth-form__social-title">Kết nối với Google</span>
                </a>
            </div>
        </div>
    </div>
    `;

    bodyElement.appendChild(modalElement);

    var modalClose = document.querySelector(".modal__overlay");
    modalClose.onclick = function (e) {
        bodyElement.removeChild(modalElement);
    }

    document.querySelector(".auth-form__switch-btn").onclick = function (e) {
        var authForm = modalElement.querySelector(".auth-form");
        authForm.innerHTML = `
        <div class="auth-form__container">
        <div class="auth-form__header">
            <h3 class="auth-form__heading">Đăng ký</h3>
            <span class="auth-form__switch-btn">Đăng nhập</span>
        </div>

        <div class="auth-form__form">
            <div class="auth-form__group">
                <input type="text" class="auth-form__input" placeholder="Email của bạn">
            </div>
            <div class="auth-form__group">
                <input type="password" class="auth-form__input" placeholder="Mật khẩu của bạn">
            </div>
            <div class="auth-form__group">
                <input type="password" class="auth-form__input" placeholder="Nhập lại mật khẩu">
            </div>
        </div>

        <div class="auth-form__aside">
            <p class="auth-form__policy-text">
                Bằng việc đăng ký bạn đồng ý với f8 về
                <a href="" class="auth-form__policy-link">Điều khoản dịch vụ</a> &
                <a href="" class="auth-form__policy-link">Chính sách bảo mật</a>
            </p>
        </div>

        <div class="auth-form__control">
            <button class="btn btn--normal">TRỞ LẠI</button>
            <button class="btn btn--primary">ĐĂNG KÝ</button>
        </div>
        </div>

        <div class="auth-form__social">
            <a href="" class="auth-form__social-facebook btn btn--with-icon"><i
                    class="auth-form__social-icon fab fa-facebook-square"></i>
                <span class="auth-form__social-title">Kết nối với Facebook</span>
            </a>
            <a href="" class="auth-form__social-google btn btn--with-icon"><i
                    class="auth-form__social-icon fab fa-google"></i>
                <span class="auth-form__social-title">Kết nối với Google</span>
            </a>
        </div>
        `;
    }
}
