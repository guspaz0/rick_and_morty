// Enum for gender of the character
enum Gender {
    Male = 'Male',
    Female = 'Female',
    Genderless = 'Genderless',
    Unknown = 'Unknown',
}

// Enum for species of the character
enum Species {
    Human = 'Human',
    Alien = 'Alien',
    Humanoid = 'Humanoid',
    Robot = 'Robot',
    Cronenberg = 'Cronenberg',
    // Add more species as per API data
    Unknown = 'Unknown',
}

// Enum for the status of the character (Alive, Dead, or Unknown)
enum Status {
    Alive = 'Alive',
    Dead = 'Dead',
    Unknown = 'Unknown',
}

// Interface for a single character
interface Character {
    id: number;
    name: string;
    status: Status;
    species: Species;
    type: string; // Additional type information if exists (optional field)
    gender: Gender;
    origin: {
        name: string;
        url: string;
    };
    location: {
        name: string;
        url: string;
    };
    image: string;
    episode: string[]; // Array of episode URLs where the character appeared
    url: string; // URL to the character's data
    created: string; // Date the character was created
}

interface PaginationInfo {
    count: number
    pages: number
    next: string | null
    prev: string | null
}

interface PageResults {
    info: PaginationInfo
    results: Character[]
}

type CharacterId = Pick<Character, 'id'>
type CharacterName = Pick<Character, 'name'>

export {Gender, Species, Status};

export type { Character, PaginationInfo, PageResults, CharacterId, CharacterName };
