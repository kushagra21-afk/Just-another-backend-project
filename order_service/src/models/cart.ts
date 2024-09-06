export class Types {
    constructor(
        public readonly customerId: number,
        public readonly title: string,
        public readonly amount: number,
        public readonly id?: number) {
        
    }
}