const REPAIRS_KEY = 'repairs';
const NEXT_ID = 'nextID';

export default class RepairService {

  #nextid;

  constructor() {
    this.repairAssignments = JSON.parse(window.localStorage.getItem(REPAIRS_KEY));
    if (!this.repairAssignments) {
      this.repairAssignments = [];
    }
    this.#nextid = Number(window.localStorage.getItem(NEXT_ID));
  }

  /**
   * Returns the next repair id;
   * @returns 
   */
  nextId() {
    return new Promise((resolve) => {
      this.#nextid += 1;
      window.localStorage.setItem(NEXT_ID, this.#nextid);
      resolve(this.#nextid);
    });
  }

  /**
   * 
   * @param { Repair } repairAssignment 
   * @returns 
   */
  addRepair(repairAssignment) {
    return new Promise((resolve) => {
      this.repairAssignments = [...this.repairAssignments, repairAssignment];
      window.localStorage.setItem(REPAIRS_KEY, JSON.stringify(this.repairAssignments));
      resolve();
    })
  }

  deleteRepair(id) {
    return new Promise((resolve) => {
      this.repairAssignments = this.repairAssignments.filter((repair) => repair.id !== id);
      window.localStorage.setItem(REPAIRS_KEY, JSON.stringify(this.repairAssignments));
      resolve(this.repairAssignments);
    });
  }

  getRepairs() {
    return new Promise((resolve) => {
      this.repairAssignments = JSON.parse(window.localStorage.getItem(REPAIRS_KEY));
      if (!this.repairAssignments) {
        this.repairAssignments = [];
      }
      resolve([...this.repairAssignments]);
    });
  }
}