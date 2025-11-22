import { Theme } from '../types';

class SoundEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;

  private init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = 0.1; // REDUCED VOLUME: Subtle ambience
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public playTransitionSound(theme: Theme) {
    this.init();
    if (!this.ctx || !this.masterGain) return;
    
    // UNIFIED SOUND: A soft, paper-like "thwip"
    this.playSoftPageFlip(this.ctx.currentTime);
  }

  // SFX: Soft Page Flip / Card Slide
  private playSoftPageFlip(t: number) {
    if (!this.ctx || !this.masterGain) return;
    
    // Create noise buffer
    const bufferSize = this.ctx.sampleRate * 0.5; // 0.5 seconds
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    
    // Filter: Lowpass/Bandpass mix for a "matte" sound, not "sharp"
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(400, t); // Start muffled
    filter.frequency.linearRampToValueAtTime(1200, t + 0.1); // Slight open
    filter.frequency.linearRampToValueAtTime(200, t + 0.3); // Close down

    const gain = this.ctx.createGain();
    
    // ADSR: Short and snappy but soft attack
    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(1, t + 0.05); // Soft Attack
    gain.gain.exponentialRampToValueAtTime(0.01, t + 0.3); // Quick Decay

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);
    
    noise.start(t);
    noise.stop(t + 0.35);
  }
}

export const soundEngine = new SoundEngine();