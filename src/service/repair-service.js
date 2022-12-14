export default class RepairService {

  /**
   * Returns the next repair id;
   * @returns 
   */
  nextId() {
    return new Promise((resolve) => {
      resolve(1);
    });
  }
}