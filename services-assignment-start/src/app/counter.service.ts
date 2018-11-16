export class CounterService {
    activeToInactiveCounter = 0;
    inactiveToActiveCounter = 0;
    increamentActiveToInactive() {
        this.activeToInactiveCounter++;
        console.log(this.activeToInactiveCounter)
    }
    increamentInactiveToInactive() {
        this.inactiveToActiveCounter++;
        console.log(this.inactiveToActiveCounter)
    }
}