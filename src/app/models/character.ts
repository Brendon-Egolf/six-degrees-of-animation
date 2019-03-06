import {VoiceActor} from './voice-actor';

export class Character {
  public malId: string;
  public url: string;
  public imageUrl: string;
  public name: string;
  public role: string;
  public voiceActors: VoiceActor[];
  public voiceActor: VoiceActor;

  constructor(data = {}) {
    Object.assign(this as Character, data);
    for (const voiceActor: VoiceActor in this.voiceActors) {
      if (voiceActor.language === 'Japanese') {
        this.voiceActor = voiceActor;
      }
    }
  }
}
