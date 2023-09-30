import { AvatarGenerator } from "random-avatar-generator";
export function generateAvatar() {
    const generator = new AvatarGenerator();
    return generator.generateRandomAvatar();
  }