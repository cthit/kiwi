export class Food {
	saturation: number;
	fulfillment: number;
	imageURL: String;

	constructor(saturation: number, fulfillment: number, imageURL: String) {
		this.saturation = saturation;
		this.fulfillment = fulfillment;
		this.imageURL = imageURL;
	}
}
