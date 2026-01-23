// AudioPlayer.jsx
import { useState, useRef, useEffect } from "react";
import { TbMusicOff } from "react-icons/tb";
import { FaMusic } from "react-icons/fa";

// 背景音乐控制 React 组件
const BgmToggle = ({
  audioSrc = "/music/bgm.mp3", // 默认音频路径
  playText = "播放背景音乐", // 播放状态按钮文字
  pauseText = "停止背景音乐", // 暂停状态按钮文字
}) => {
  // 管理播放状态
  const [isPlaying, setIsPlaying] = useState(false);
  // 保存 Audio 实例的引用
  const audioRef = useRef(null);

  // 初始化 Audio 实例
  useEffect(() => {
    // 创建 Audio 对象
    audioRef.current = new Audio(audioSrc);

    // 组件卸载时清理资源
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [audioSrc]);

  // 播放/暂停切换逻辑
  const toggleAudio = async () => {
    try {
      const audio = audioRef.current;
      if (!audio) return;

      if (isPlaying) {
        // 暂停音频
        audio.pause();
        setIsPlaying(false);
      } else {
        // 播放音频（需用户交互触发）
        await audio.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error("音频播放失败：", error);
      alert("背景音乐播放失败，请检查音频文件或浏览器权限");
    }
  };

  return (
    <button
      className={`theme-toggle scale-160 cursor-pointer transition duration-300 hover:scale-180`}
      onClick={toggleAudio}
      aria-label={isPlaying ? pauseText : playText}
      id="pd"
    >
      <style>
        {`
        :root {
          --theme-toggle-color: currentColor;
        }

        .theme-toggle {
          z-index: 10;
        }

        #pd {
          padding : 4px;
        }

        .toggle-indicator {
          border-radius: 50%;
          width: 36px;
          height: 36px;
          position: relative;
          box-shadow: inset 16px -16px 0 0 var(--theme-toggle-color, #ffbb52);
          transform: scale(1) rotate(-2deg);
          transition:
            box-shadow 0.5s ease 0s,
            transform 0.4s ease 0.1s;
        }

        .toggle-indicator:before {
          content: '';
          width: inherit;
          height: inherit;
          border-radius: inherit;
          position: absolute;
          left: 0;
          top: 0;
          background: transparent;
          transition: background 0.3s ease;
        }

        .toggle-indicator:after {
          content: '';
          width: 8px;
          height: 8px;
          border-radius: 50%;
          margin: -4px 0 0 -4px;
          position: absolute;
          top: 50%;
          left: 50%;
          box-shadow:
            0 -23px 0 var(--theme-toggle-color, #ffbb52),
            0 23px 0 var(--theme-toggle-color, #ffbb52),
            23px 0 0 var(--theme-toggle-color, #ffbb52),
            -23px 0 0 var(--theme-toggle-color, #ffbb52),
            15px 15px 0 var(--theme-toggle-color, #ffbb52),
            -15px 15px 0 var(--theme-toggle-color, #ffbb52),
            15px -15px 0 var(--theme-toggle-color, #ffbb52),
            -15px -15px 0 var(--theme-toggle-color, #ffbb52);
          transform: scale(0);
          transition: all 0.3s ease;
        }

        /* Dark mode (moon) */
        input:checked + .toggle-indicator {
          box-shadow: inset 32px -32px 0 0 var(--theme-background-color, #17181c);
          transform: scale(0.5) rotate(0deg);
          transition:
            transform 0.3s ease 0.1s,
            box-shadow 0.2s ease 0s;
        }

        input:checked + .toggle-indicator:before {
          background: var(--theme-toggle-color, #ffbb52);
          transition: background 0.3s ease 0.1s;
        }

        input:checked + .toggle-indicator:after {
          transform: scale(1.5);
          transition: transform 0.5s ease 0.15s;
        }
      `}
      </style>
      {isPlaying ? (
        <>
          <FaMusic className="toggle block cursor-pointer" />
        </>
      ) : (
        <>
          <TbMusicOff className="toggle block cursor-pointer" />
        </>
      )}
    </button>
  );
};

export default BgmToggle;
