export const FooterLeft = (props: SVGProps) => {
  return (
    <svg {...props} fill="none" height="399" viewBox="0 0 488 399" width="488" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient cx="0.5" cy="0.5" id="footer-blue-grad" r="0.5">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <mask id="footer-mask">
          <path
            d="M157.382 573.501L435.954 90.9996C459.048 50.9996 430.18 0.99969 383.992 0.999686L-90 0.999644"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
        </mask>
      </defs>

      <path
        d="M157.382 573.501L435.954 90.9996C459.048 50.9996 430.18 0.99969 383.992 0.999686L-90 0.999644"
        stroke="currentColor"
        strokeOpacity="0.1"
      />

      <g mask="url(#footer-mask)">
        <circle className="footer-line" cx="200" cy="200" fill="url(#footer-blue-grad)" r="15">
          <animateTransform
            attributeName="transform"
            dur="3s"
            repeatCount="indefinite"
            type="translate"
            values="0,0; 50,50; 0,0"
          />
        </circle>
        <circle className="footer-line" cx="300" cy="150" fill="url(#footer-blue-grad)" r="12">
          <animateTransform
            attributeName="transform"
            dur="4s"
            repeatCount="indefinite"
            type="translate"
            values="0,0; -30,30; 0,0"
          />
        </circle>
        <circle className="footer-line" cx="400" cy="100" fill="url(#footer-blue-grad)" r="10">
          <animateTransform
            attributeName="transform"
            dur="2.5s"
            repeatCount="indefinite"
            type="translate"
            values="0,0; 20,-20; 0,0"
          />
        </circle>
      </g>
    </svg>
  );
};

export const FooterRight = (props: SVGProps) => {
  return (
    <svg {...props} fill="none" height="399" viewBox="0 0 551 399" width="551" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M52 438.5V61C52 27.8629 78.8629 1 112 1H412.147C428.06 1 443.321 7.32141 454.574 18.5736L580.5 144.5"
        stroke="white"
        strokeOpacity="0.1"
      />
      <g filter="url(#filter0_dddd_186_7)">
        <path d="M52 94V118" stroke="white" />
      </g>
      <defs>
        <filter
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="108"
          id="filter0_dddd_186_7"
          width="85"
          x="9.5"
          y="52"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="21" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_186_7" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="18" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend in2="effect1_dropShadow_186_7" mode="normal" result="effect2_dropShadow_186_7" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="12" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0" />
          <feBlend in2="effect2_dropShadow_186_7" mode="normal" result="effect3_dropShadow_186_7" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="6" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
          <feBlend in2="effect3_dropShadow_186_7" mode="normal" result="effect4_dropShadow_186_7" />
          <feBlend in="SourceGraphic" in2="effect4_dropShadow_186_7" mode="normal" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};

export const FooterUpRight = (props: SVGProps) => {
  return (
    <svg {...props} fill="none" height="495" viewBox="0 0 627 495" width="627" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 0V239.5C1 257.173 15.3269 271.5 33 271.5H417C434.673 271.5 449 285.827 449 303.5V462.5C449 480.173 463.327 494.5 481 494.5H627"
        stroke="white"
        strokeOpacity="0.1"
      />
      <g filter="url(#filter0_dddd_186_8)">
        <path d="M448.997 372V396" stroke="white" />
      </g>
      <defs>
        <filter
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="108"
          id="filter0_dddd_186_8"
          width="85"
          x="406.497"
          y="330"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="21" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_186_8" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="18" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend in2="effect1_dropShadow_186_8" mode="normal" result="effect2_dropShadow_186_8" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="12" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0" />
          <feBlend in2="effect2_dropShadow_186_8" mode="normal" result="effect3_dropShadow_186_8" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="6" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
          <feBlend in2="effect3_dropShadow_186_8" mode="normal" result="effect4_dropShadow_186_8" />
          <feBlend in="SourceGraphic" in2="effect4_dropShadow_186_8" mode="normal" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};

export const FooterUpLeft = (props: SVGProps) => {
  return (
    <svg {...props} fill="none" height="572" viewBox="0 0 600 572" width="600" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M599.5 0V238C599.5 255.673 585.173 270 567.5 270H181.5C163.827 270 149.5 284.327 149.5 302V482.161C149.5 512.199 111.849 525.686 92.7774 502.478L-5 383.5"
        stroke="white"
        strokeOpacity="0.1"
      />
      <g filter="url(#filter0_dddd_186_9)">
        <path d="M416 270L390 270" stroke="white" />
      </g>
      <defs>
        <filter
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="85"
          id="filter0_dddd_186_9"
          width="110"
          x="348"
          y="227.5"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="21" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_186_9" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="18" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend in2="effect1_dropShadow_186_9" mode="normal" result="effect2_dropShadow_186_9" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="12" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0" />
          <feBlend in2="effect2_dropShadow_186_9" mode="normal" result="effect3_dropShadow_186_9" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="6" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
          <feBlend in2="effect3_dropShadow_186_9" mode="normal" result="effect4_dropShadow_186_9" />
          <feBlend in="SourceGraphic" in2="effect4_dropShadow_186_9" mode="normal" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};
