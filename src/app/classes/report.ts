export class Report {
    id: Number;
    logo: String;
    banneerImageLeft: String;
    banneerImageRight: String;
    title: String;
    price: String;
    rating: String;
    exteriorRating: String;
    interiorRating: String;
    engineRating: String;
    fairConditions: String;
    goodConditions: String;
    vehicleDetails: {
        location: String;
        kms: String;
        fuelType: String;
        driving: String;
        color: String;
        ownerType: String;
    }
}
