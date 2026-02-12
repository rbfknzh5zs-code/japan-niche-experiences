// ===== ZEN RETREAT JAPAN - i18n =====

class I18n {
    constructor() {
        this.currentLang = localStorage.getItem('zen_lang') || this.detectLanguage();
        this.init();
    }

    detectLanguage() {
        const browserLang = navigator.language || navigator.userLanguage;
        return browserLang.startsWith('ja') ? 'ja' : 'en';
    }

    init() {
        this.applyTranslations();
        this.setupLangSwitch();
    }

    applyTranslations() {
        const t = translations[this.currentLang];
        if (!t) return;

        // Text content
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key] !== undefined) {
                el.textContent = t[key];
            }
        });

        // Placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (t[key] !== undefined) {
                el.placeholder = t[key];
            }
        });

        // Labels (for optgroups etc.)
        document.querySelectorAll('[data-i18n-label]').forEach(el => {
            const key = el.getAttribute('data-i18n-label');
            if (t[key] !== undefined) {
                el.label = t[key];
            }
        });

        // Update html lang attribute
        document.documentElement.lang = this.currentLang;
    }

    setupLangSwitch() {
        const btn = document.getElementById('langSwitch');
        if (!btn) return;

        btn.addEventListener('click', () => {
            this.currentLang = this.currentLang === 'en' ? 'ja' : 'en';
            localStorage.setItem('zen_lang', this.currentLang);
            this.applyTranslations();
        });
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new I18n();
});
