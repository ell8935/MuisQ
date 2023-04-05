import LoaderStyled from "./LoaderStyled";

const Loader = () => {
  return (
    <LoaderStyled>
      <div>
        <svg
          x="0px"
          y="0px"
          width="75%"
          height="75%"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 24 30"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect x="0" y="10" width="4" height="10" fill="#333" opacity="0.2">
            <animate
              begin="0s"
              dur="0.6s"
              values="0.2; 1; .2"
              attributeType="XML"
              repeatCount="indefinite"
              attributeName="opacity"
            />
            <animate
              begin="0s"
              dur="0.6s"
              values="10; 20; 10"
              attributeType="XML"
              attributeName="height"
              repeatCount="indefinite"
            />
            <animate
              begin="0s"
              dur="0.6s"
              attributeName="y"
              values="10; 5; 10"
              attributeType="XML"
              repeatCount="indefinite"
            />
          </rect>
          <rect x="8" y="10" width="4" height="10" fill="#333" opacity="0.2">
            <animate
              dur="0.6s"
              begin="0.15s"
              attributeType="XML"
              values="0.2; 1; .2"
              attributeName="opacity"
              repeatCount="indefinite"
            />
            <animate
              dur="0.6s"
              begin="0.15s"
              values="10; 20; 10"
              attributeType="XML"
              attributeName="height"
              repeatCount="indefinite"
            />
            <animate
              dur="0.6s"
              begin="0.15s"
              attributeName="y"
              values="10; 5; 10"
              attributeType="XML"
              repeatCount="indefinite"
            />
          </rect>
          <rect x="16" y="10" width="4" height="10" fill="#333" opacity="0.2">
            <animate
              dur="0.6s"
              begin="0.3s"
              attributeType="XML"
              values="0.2; 1; .2"
              attributeName="opacity"
              repeatCount="indefinite"
            />
            <animate
              dur="0.6s"
              begin="0.3s"
              values="10; 20; 10"
              attributeType="XML"
              attributeName="height"
              repeatCount="indefinite"
            />
            <animate
              dur="0.6s"
              begin="0.3s"
              attributeName="y"
              values="10; 5; 10"
              attributeType="XML"
              repeatCount="indefinite"
            />
          </rect>
        </svg>
      </div>
    </LoaderStyled>
  );
};

export default Loader;
