import Image from "next/image";

// Define the interface
export interface Officer {
  house: string;
  social: string;
  website: string;
  logo: string;
  person: string;
}

// Export the officers array with type
export const officers: Officer[] = [
  {
    house: "Bankless",
    social: "https://x.com/RyanSAdams",
    website: "https://www.bankless.com/",
    logo: "/image/bankless-logo.png",
    person: "Ryan Sean Adams",
  },
  {
    house: "The Daily Gwei",
    social: "https://x.com/sassal0x",
    website: "https://thedailygwei.substack.com/",
    logo: "/image/gwei-logo.png",
    person: "Anthony Sassano",
  },
  {
    house: "growthepie",
    social: "https://x.com/tobschcom",
    website: "https://www.growthepie.com/",
    logo: "/image/growthepie-logo.png",
    person: "Tobias Schreier",
  },
  {
    house: "Etherealize",
    social: "https://x.com/gphummer",
    website: "https://www.etherealize.io/",
    logo: "/image/etherealize-logo.png",
    person: "Grant Hummer",
  },
  {
    house: "Metal",
    social: "https://x.com/its_everdred",
    website: "https://metal.build/",
    logo: "/image/metal-logo.png",
    person: "Everdred",
  },
];

export function GuildOfficers() {
  return (
    <section className="py-12">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-center">Guild Officers</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto">
          Our officers guide the Guild&apos;s mission and strategy.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-7xl mx-auto px-4">
        {officers.map((officer, index) => (
          <div
            key={index}
            className="group relative flex flex-col items-center text-center p-6 rounded-xl transition-all duration-300 hover:bg-accent/50 hover:shadow-lg hover:-translate-y-1"
          >
            <div className="relative mb-4 transition-transform duration-300 group-hover:scale-105">
              <a
                href={officer.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={officer.logo}
                  alt={`${officer.house} logo`}
                  width={120}
                  height={120}
                  className="rounded-full shadow-md"
                />
                <div
                  className="absolute inset-0 rounded-full ring-2 ring-primary/20
                              group-hover:ring-primary/40 transition-all duration-300"
                />
              </a>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-lg tracking-tight">
                <a
                  href={officer.social}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  {officer.person}
                </a>
              </h3>
              <p className="text-sm text-muted-foreground">
                of house{" "}
                <a
                  href={officer.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  {officer.house}
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
