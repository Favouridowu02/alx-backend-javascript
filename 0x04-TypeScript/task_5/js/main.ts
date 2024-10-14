export interface MajorCredits {
    credits: number & {_brand: 'MajorCredits.credits'};
}

export interface MinorCredits  {
    credits: number & {_brand : 'MinorCredits.credits'};
}

export function sumMajorCredits(subject_1: MajorCredits, subject_2: MajorCredits): number {
    return  subject_1.credits + subject_2.credits;
}

export function sumMinorCredits(subject_1: MinorCredits, subject_2: MinorCredits) {
    return subject_1.credits + subject_2.credits;
}