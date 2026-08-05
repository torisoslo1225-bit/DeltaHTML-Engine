export default class DamageSystem {
  static hit(target, amount) {
    target.hp = Math.max(0, target.hp - amount);
  }
}
