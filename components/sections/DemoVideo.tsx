'use client'
import { useRef, useState } from 'react'
import { Volume2, VolumeX, Play, Pause } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function DemoVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [volume, setVolume] = useState(0.8)
  const [isHoveringVolume, setIsHoveringVolume] = useState(false)

  const toggleMute = () => {
    if (videoRef.current) {
      const newMuted = !isMuted
      videoRef.current.muted = newMuted
      setIsMuted(newMuted)
      // ถ้ากดเปิดเสียงแล้ว volume เดิมเป็น 0 ให้ตั้งค่าเริ่มต้นที่ 80%
      if (!newMuted && volume === 0) {
        setVolume(0.8)
        videoRef.current.volume = 0.8
      }
    }
  }

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (videoRef.current) {
      videoRef.current.volume = newVolume
      const mutedStatus = newVolume === 0
      videoRef.current.muted = mutedStatus
      setIsMuted(mutedStatus)
    }
  }

  return (
    <section className="relative w-full max-w-5xl mx-auto px-6 py-12">
      <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black border border-gray-100">
        <video
          ref={videoRef}
          src="/demo.mp4"
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Main Controls Overlay */}
        <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between z-30">
          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            className="p-3 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all border border-white/10"
          >
            {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" />}
          </button>

          {/* Volume Control Group (Vertical) */}
          <div 
            className="relative flex flex-col items-center"
            onMouseEnter={() => setIsHoveringVolume(true)}
            onMouseLeave={() => setIsHoveringVolume(false)}
          >
            <AnimatePresence>
              {isHoveringVolume && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute bottom-full mb-3 p-3 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 flex flex-col items-center"
                >
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="accent-green-400 cursor-pointer h-24"
                    style={{
                      writingMode: 'vertical-lr' as React.CSSProperties['writingMode'],
                      WebkitAppearance: 'slider-vertical',
                      width: '6px'
                    } as React.CSSProperties}
                  />
                  <div className="mt-2 text-[10px] font-bold text-white tabular-nums">
                    {Math.round(volume * 100)}%
                  </div>
                  
                  {/* Invisible bridge to keep hover state stable */}
                  <div className="absolute h-4 w-full -bottom-4 left-0" />
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={toggleMute}
              className="p-3 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all border border-white/10"
            >
              {isMuted || volume === 0 ? (
                <VolumeX size={20} />
              ) : (
                <Volume2 size={20} />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}