// All English lecture series by Swami Ishatmananda
const SERIES_DATA = [

  // ─── FEATURED / FLAGSHIP ───────────────────────────────────────────────

  {
    id: "panchama-veda",
    title: "Panchama Veda",
    subtitle: "The Gospel of Sri Ramakrishna",
    category: ["scripture", "biography"],
    channel: "Chicago Vedanta",
    channelUrl: "https://www.youtube.com/@ChicagoVedanta",
    playlistUrl: "https://www.youtube.com/playlist?list=PLOEjrfhKOlHluaG8U4dhX6FREjS2qtoC6",
    episodes: 134,
    avgDuration: "~60 min",
    totalHours: "~134 hrs",
    status: "complete",
    featured: true,
    years: "2020–2024",
    description: "Swami Ishatmananda's most expansive series — 134 lectures on the Gospel of Sri Ramakrishna (Kathamrita), the sacred record of Sri Ramakrishna's conversations. Called the 'Fifth Veda' for its living spiritual wisdom, this series explores divine love, meditation, and the path of God-realization through the words of the Master himself.",
    topics: ["Gospel of Sri Ramakrishna", "Kathamrita", "Bhakti", "Vedanta", "Spiritual life"],
    sampleEpisodes: [
      "Panchama Veda 01: The Gospel of Sri Ramakrishna",
      "Panchama Veda — Sri Ramakrishna and Buddha",
      "Panchama Veda — Bhagavan Sri Ramakrishna Final Instructions",
      "Panchama Veda — Concluding Lecture"
    ]
  },

  {
    id: "bhagavad-gita",
    title: "Bhagavad Gita",
    subtitle: "The Song of the Lord",
    category: ["scripture"],
    channel: "Chicago Vedanta",
    channelUrl: "https://www.youtube.com/@ChicagoVedanta",
    playlistUrl: "https://www.youtube.com/playlist?list=PLOEjrfhKOlHnl_EKBu4meY4gyDVC5OgkL",
    episodes: 103,
    avgDuration: "~60 min",
    totalHours: "~103 hrs",
    status: "complete",
    featured: true,
    years: "2018–2022",
    description: "A chapter-by-chapter exposition of the Bhagavad Gita — 103 lectures that illuminate Lord Krishna's dialogue with Arjuna on duty, devotion, knowledge, and the nature of the Self. Swami Ishatmananda draws on classical commentaries while making the text directly applicable to modern spiritual seekers.",
    topics: ["Bhagavad Gita", "Karma Yoga", "Jnana Yoga", "Bhakti Yoga", "Dharma"],
    sampleEpisodes: [
      "Bhagavad Gita 001",
      "Bhagavad Gita 002",
      "Bhagavad Gita 003"
    ]
  },

  {
    id: "saga-of-a-godman",
    title: "Sri Ramakrishna: Saga of a Godman",
    subtitle: "Life of the Divine Incarnation",
    category: ["biography"],
    channel: "Chicago Vedanta",
    channelUrl: "https://www.youtube.com/@ChicagoVedanta",
    playlistUrl: "https://www.youtube.com/playlist?list=PLOEjrfhKOlHmvF4slDTedDClEOMWDu6Pu",
    episodes: 5,
    avgDuration: "~60 min",
    totalHours: "~5 hrs",
    status: "ongoing",
    featured: true,
    years: "2026–present",
    description: "A newly launched series (2026) exploring the life of Sri Ramakrishna based on 'Sri Ramakrishna: The Great Master' by Swami Saradananda. Swami Ishatmananda examines the birth, childhood, and divine experiences of the great saint — including profound questions about God-incarnations and the nature of divine consciousness.",
    topics: ["Sri Ramakrishna", "Incarnation", "Divine consciousness", "Biography"],
    sampleEpisodes: [
      "Sri Ramakrishna: Saga of a Godman | Introduction",
      "Sri Ramakrishna: Saga of a Godman | Birth of a God",
      "Do Incarnations Have Unbroken Memories?",
      "Do We Need God Incarnations?"
    ]
  },

  {
    id: "saga-of-the-soul",
    title: "Saga of the Soul",
    subtitle: "Indian Philosophy, Vedas & Upanishads",
    category: ["philosophy", "scripture"],
    channel: "Chicago Vedanta",
    channelUrl: "https://www.youtube.com/@ChicagoVedanta",
    playlistUrl: "https://www.youtube.com/@ChicagoVedanta/search?query=saga+of+soul",
    episodes: 78,
    avgDuration: "~65 min",
    totalHours: "~85 hrs",
    status: "complete",
    featured: true,
    years: "2015–2017",
    description: "One of Swami Ishatmananda's earliest and most encyclopedic English series — 78+ lectures tracing the journey of the soul through Indian philosophy, from the Vedas and Upanishads to the six schools of Indian thought (Nyaya, Vaisheshika, Samkhya, Yoga, Mimamsa, Vedanta). An essential introduction to Vedic civilization and metaphysics.",
    topics: ["Indian philosophy", "Vedas", "Upanishads", "Atma", "Soul", "Vedantic philosophy"],
    sampleEpisodes: [
      "The Saga of the Soul 001",
      "Saga of the Soul 2: The Search for the Root",
      "Saga of the Soul 11: The Storehouse of Knowledge — The Vedas",
      "Saga of the Soul 036: Advaita Vedanta",
      "Saga of the Soul 063: Vaisheshika Philosophy"
    ]
  },

  {
    id: "bhagavatam",
    title: "Bhagavatam: A Guide to Liberation",
    subtitle: "Srimad Bhagavatam",
    category: ["scripture"],
    channel: "Chicago Vedanta",
    channelUrl: "https://www.youtube.com/@ChicagoVedanta",
    playlistUrl: "https://www.youtube.com/playlist?list=PLOEjrfhKOlHlcRto9x_jm_BU15D2iA5QC",
    episodes: 81,
    avgDuration: "~60 min",
    totalHours: "~81 hrs",
    status: "complete",
    featured: false,
    years: "2019–2023",
    description: "81 lectures on the Srimad Bhagavatam — the great Purana that Narada called the ripened fruit of the Vedic tree. Swami Ishatmananda presents this ocean of devotion and wisdom, covering its origin, the questions of the rishis, the birth of Parikshit, and the grand teachings on liberation.",
    topics: ["Srimad Bhagavatam", "Bhakti", "Liberation", "Narada", "Parikshit"],
    sampleEpisodes: [
      "Bhagavatam — A Guide to Liberation: Birth of the Scripture",
      "Bhagavatam 002 — Five Questions of the Rishis",
      "Bhagavatam 006 — Birth of Parikshit"
    ]
  },

  {
    id: "yoga-vasistha",
    title: "Yoga Vasistha",
    subtitle: "A Guide to Brahma Jnana",
    category: ["scripture", "philosophy"],
    channel: "Chicago Vedanta",
    channelUrl: "https://www.youtube.com/@ChicagoVedanta",
    playlistUrl: "https://www.youtube.com/playlist?list=PLOEjrfhKOlHmR7EzV4ddrWCJSQKoef2be",
    episodes: 72,
    avgDuration: "~60 min",
    totalHours: "~72 hrs",
    status: "complete",
    featured: false,
    years: "2021–2024",
    description: "72 lectures exploring the Yoga Vasistha — the vast text in which the sage Vasistha instructs the young Rama on the nature of reality, consciousness, and liberation. Swami Ishatmananda illuminates this profound Advaita scripture, covering Sri Ramachandra's doubts, the illusory nature of the world, and the path to self-knowledge.",
    topics: ["Yoga Vasistha", "Advaita", "Brahma Jnana", "Rama", "Vasistha", "Consciousness"],
    sampleEpisodes: [
      "Yoga Vasistha – A Guide to Brahma Jnana | Introduction",
      "Yoga Vasistha — Doubts of Sri Ramachandra",
      "Yoga Vasistha — Doubts of Sri Ramachandra (Part 2)"
    ]
  },

  // ─── UPANISHADS ─────────────────────────────────────────────────────────

  {
    id: "brhadaranyaka",
    title: "Brhadaranyaka Upanishad",
    subtitle: "Traveling the Deep Forest of Knowledge",
    category: ["upanishad"],
    channel: "Chicago Vedanta",
    channelUrl: "https://www.youtube.com/@ChicagoVedanta",
    playlistUrl: "https://www.youtube.com/playlist?list=PLOEjrfhKOlHlaNv72xwSnExZzkash4Vpv",
    episodes: 28,
    avgDuration: "~60 min",
    totalHours: "~28 hrs",
    status: "complete",
    featured: false,
    years: "2022–2023",
    description: "28 lectures on the Brhadaranyaka Upanishad — one of the oldest and largest Upanishads, a profound inquiry into the nature of Brahman, creation, and the individual self. Swami Ishatmananda explores its deep teachings on knowledge attained through rituals, the mystery of creation, and the realization of identity with the Absolute.",
    topics: ["Brhadaranyaka Upanishad", "Brahman", "Atma", "Advaita", "Yajnavalkya"],
    sampleEpisodes: [
      "Brhadaranyaka Upanishad — Traveling the Deep Forest of Knowledge",
      "Attainment of Knowledge Through Rituals",
      "Mystery of Creation"
    ]
  },

  {
    id: "chandogya",
    title: "Chandogya Upanishad",
    subtitle: "The Song of the Forest",
    category: ["upanishad"],
    channel: "Chicago Vedanta",
    channelUrl: "https://www.youtube.com/@ChicagoVedanta",
    playlistUrl: "https://www.youtube.com/playlist?list=PLOEjrfhKOlHlgcqexZGJjVPxFL4Mf2Myk",
    episodes: 16,
    avgDuration: "~60 min",
    totalHours: "~16 hrs",
    status: "complete",
    featured: false,
    years: "2022–2023",
    description: "16 lectures on the Chandogya Upanishad, one of the principal Upanishads belonging to the Sama Veda. It contains the famous teaching 'Tat tvam asi' (That thou art) — the mahavakya declaring the identity of the individual soul with Brahman. Swami Ishatmananda makes these ancient insights accessible and transformative.",
    topics: ["Chandogya Upanishad", "Tat tvam asi", "Mahavakya", "Brahman", "Sama Veda"],
    sampleEpisodes: [
      "Chandogya Upanishad — Introduction",
      "Chandogya Upanishad — Tat Tvam Asi"
    ]
  },

  {
    id: "astavakra",
    title: "Astavakra Samhita",
    subtitle: "Dialogue on Pure Consciousness",
    category: ["upanishad", "philosophy"],
    channel: "Chicago Vedanta",
    channelUrl: "https://www.youtube.com/@ChicagoVedanta",
    playlistUrl: "https://www.youtube.com/playlist?list=PLOEjrfhKOlHmhX_0y9Ym2rLw85p6Up8Eh",
    episodes: 20,
    avgDuration: "~60 min",
    totalHours: "~20 hrs",
    status: "complete",
    featured: false,
    years: "2023–2024",
    description: "20 lectures on the Astavakra Samhita — the radical Advaita text presenting the highest non-dual teachings. The dialogue between the sage Astavakra and King Janaka cuts through all spiritual practices to declare the immediate recognition of pure consciousness. Considered one of the most direct expressions of Jnana.",
    topics: ["Astavakra Samhita", "Advaita", "Jnana", "Pure consciousness", "Non-duality"],
    sampleEpisodes: [
      "Astavakra Samhita — Introduction to Jnana",
      "Astavakra Samhita — The Nature of Pure Consciousness"
    ]
  },

  // ─── DEVOTION / BHAKTI ──────────────────────────────────────────────────

  {
    id: "narada-bhakti-sutra",
    title: "Narada Bhakti Sutras",
    subtitle: "Fragrance of Vedanta",
    category: ["devotion", "scripture"],
    channel: "Chicago Vedanta",
    channelUrl: "https://www.youtube.com/@ChicagoVedanta",
    playlistUrl: "https://www.youtube.com/playlist?list=PLOEjrfhKOlHnxo4tHZunDzf6V6C4lUKJD",
    episodes: 13,
    avgDuration: "~65 min",
    totalHours: "~14 hrs",
    status: "complete",
    featured: true,
    years: "2023–2024",
    description: "13 lectures on Narada's Bhakti Sutras — the 84 aphorisms by the divine sage Narada defining the nature of supreme devotion (Para Bhakti). Swami Ishatmananda expounds each sutra with scholarly depth and personal warmth, exploring the various forms of love, the removal of obstacles, and the characteristics of the true bhakta.",
    topics: ["Narada Bhakti Sutras", "Bhakti", "Devotion", "Para Bhakti", "Love of God"],
    sampleEpisodes: [
      "Narada Bhakti Sutras | Part 1 — The Nature of Bhakti",
      "Narada Bhakti Sutras | Part 2",
      "Narada Bhakti Sutras | Part 5"
    ]
  },

  {
    id: "kapilopadesha",
    title: "Kapilopadesha",
    subtitle: "Fragrance of Vedanta",
    category: ["devotion", "scripture"],
    channel: "Chicago Vedanta",
    channelUrl: "https://www.youtube.com/@ChicagoVedanta",
    playlistUrl: "https://www.youtube.com/playlist?list=PLOEjrfhKOlHmjo3nkpQb0Zuh6uWl1DqAI",
    episodes: 12,
    avgDuration: "~65 min",
    totalHours: "~13 hrs",
    status: "complete",
    featured: true,
    years: "2023",
    description: "12 lectures on the Kapilopadesha — the teachings of Lord Kapila to his mother Devahuti from the Srimad Bhagavatam (Canto 3). Often called 'A Son's Advice to His Mother,' these teachings present the original Samkhya philosophy integrated with devotion to the Lord. A beautiful exploration of creation, the mind, and the path of liberation.",
    topics: ["Kapilopadesha", "Kapila", "Samkhya", "Devahuti", "Bhagavatam", "Liberation"],
    sampleEpisodes: [
      "Kapilopadesha (Part 1)",
      "Kapilopadesha (Part 2)",
      "Kapilopadesha | Fragrance of Vedanta (Part 4)"
    ]
  },

  // ─── BIOGRAPHY / SPECIFIC SERIES ───────────────────────────────────────

  {
    id: "ramayan-naperville",
    title: "Ramayan",
    subtitle: "Vedanta Study Circle of Naperville",
    category: ["biography", "scripture"],
    channel: "Chicago Vedanta",
    channelUrl: "https://www.youtube.com/@ChicagoVedanta",
    playlistUrl: "https://www.youtube.com/playlist?list=PLOEjrfhKOlHlDPxhXooEQhM4RBJ1FPOYd",
    episodes: 7,
    avgDuration: "~65 min",
    totalHours: "~8 hrs",
    status: "ongoing",
    featured: true,
    years: "2025–present",
    description: "An ongoing series on Valmiki's Ramayana — 'In Search of a Perfect Personality.' Swami Ishatmananda lectures at the Vedanta Study Circle of Naperville, exploring the Baala Kanda (Book of Youth), examining why Rama represents the ideal human being and what lessons his life holds for the spiritual seeker.",
    topics: ["Ramayana", "Valmiki", "Rama", "Baala Kanda", "Dharma", "Ideal personality"],
    sampleEpisodes: [
      "Ramayan | Baala Kanda, Chapter 1 | Introduction: In Search of a Perfect Personality",
      "Ramayan | Baala Kanda | Shlokas 21–30",
      "Ramayan | Baala Kanda, Chapter 1 | In Search of a Perfect Personality"
    ]
  },

  {
    id: "ramayan-trinidad",
    title: "Ramayan",
    subtitle: "Vedanta Study Circle of Trinidad & Tobago",
    category: ["biography", "scripture"],
    channel: "Chicago Vedanta",
    channelUrl: "https://www.youtube.com/@ChicagoVedanta",
    playlistUrl: "https://www.youtube.com/playlist?list=PLOEjrfhKOlHnhogNTNhM72eKzCnq7-OZq",
    episodes: 30,
    avgDuration: "~60 min",
    totalHours: "~30 hrs",
    status: "complete",
    featured: false,
    years: "2022–2024",
    description: "30 lectures on the Ramayana given at the Vedanta Study Circle of Trinidad and Tobago — a sister series to the Naperville Ramayan, covering the epic story of Rama with depth and devotion for a global audience.",
    topics: ["Ramayana", "Valmiki", "Rama", "Dharma", "Devotion"],
    sampleEpisodes: [
      "Ramayan | Episode 1 (Trinidad & Tobago)",
      "Ramayan | Episode 2",
      "Ramayan | Episode 3"
    ]
  },

  // ─── SPIRITUAL RETREAT ──────────────────────────────────────────────────

  {
    id: "tapasya",
    title: "Tapasya",
    subtitle: "Spiritual Retreat — Vedanta Society of Greater Houston",
    category: ["philosophy"],
    channel: "Multiple Channels",
    channelUrl: "https://www.youtube.com/@ChicagoVedanta",
    playlistUrl: "https://www.youtube.com/playlist?list=PLOEjrfhKOlHlxbMwUYebdikdKzRVPgErX",
    episodes: 2,
    avgDuration: "~75 min",
    totalHours: "~2.5 hrs",
    status: "complete",
    featured: true,
    years: "2023",
    description: "Two-part spiritual retreat on Tapasya (austerity/spiritual discipline). Delivered at the Vedanta Society of Greater Houston in April 2023, Swami Ishatmananda examines the nature, purpose, and practice of tapas — physical, verbal, and mental austerity — as described in the Bhagavad Gita and other scriptures.",
    topics: ["Tapasya", "Austerity", "Spiritual discipline", "Retreat", "Bhagavad Gita"],
    channels: ["Chicago Vedanta", "Vedanta Houston", "The Ramkrishna Way"],
    sampleEpisodes: [
      "Tapasya (Part 1) | Vedanta Society of Greater Houston April 2023 Retreat",
      "Tapasya (Part 2) | Vedanta Society of Greater Houston April 2023 Retreat"
    ]
  },

  // ─── VEDANTA CLASSICS ───────────────────────────────────────────────────

  {
    id: "upadesa-sahasri",
    title: "Upadesa Sahasri",
    subtitle: "Fragrance of Vedanta",
    category: ["philosophy", "upanishad"],
    channel: "Chicago Vedanta",
    channelUrl: "https://www.youtube.com/@ChicagoVedanta",
    playlistUrl: "https://www.youtube.com/playlist?list=PLOEjrfhKOlHkWIOUitazxgphq0EgMZIJW",
    episodes: 9,
    avgDuration: "~60 min",
    totalHours: "~9 hrs",
    status: "complete",
    featured: false,
    years: "2023",
    description: "9 lectures on the Upadesa Sahasri ('A Thousand Teachings') by Adi Shankaracharya — one of the most important Vedanta texts presenting the method of teaching self-knowledge. Swami Ishatmananda expounds Shankara's direct dialogues on the nature of the Self and the removal of ignorance.",
    topics: ["Upadesa Sahasri", "Shankaracharya", "Advaita", "Self-knowledge", "Vedanta"],
    sampleEpisodes: [
      "Upadesa Sahasri | Part 1",
      "Upadesa Sahasri | Part 2"
    ]
  },

  {
    id: "dharma-jigyaasu",
    title: "Dharma Jigyaasu",
    subtitle: "The Seeker of Dharma",
    category: ["philosophy"],
    channel: "Chicago Vedanta",
    channelUrl: "https://www.youtube.com/@ChicagoVedanta",
    playlistUrl: "https://www.youtube.com/playlist?list=PLOEjrfhKOlHlrm7z0Xonit1Bh0veO35p7",
    episodes: 11,
    avgDuration: "~60 min",
    totalHours: "~11 hrs",
    status: "complete",
    featured: false,
    years: "2023–2024",
    description: "11 lectures exploring the meaning and practice of Dharma for the modern spiritual seeker. Swami Ishatmananda examines how Dharma — as duty, righteousness, and cosmic law — shapes individual conduct and spiritual evolution, drawing from the Bhagavad Gita, Mahabharata, and Vedantic texts.",
    topics: ["Dharma", "Righteousness", "Spiritual life", "Duty", "Ethics"],
    sampleEpisodes: [
      "Dharma Jigyaasu | Episode 1",
      "Dharma Jigyaasu | Episode 2"
    ]
  },

  // ─── INTERFAITH & HOME OF HARMONY ───────────────────────────────────────

  {
    id: "know-and-love",
    title: "Know and Love",
    subtitle: "Talks on Interfaith & Intrafaith",
    category: ["interfaith"],
    channel: "Chicago Vedanta",
    channelUrl: "https://www.youtube.com/@ChicagoVedanta",
    playlistUrl: "https://www.youtube.com/playlist?list=PLOEjrfhKOlHk8rqCraPCnvW2v1BYgzBYU",
    episodes: 51,
    avgDuration: "~65 min",
    totalHours: "~55 hrs",
    status: "complete",
    featured: false,
    years: "2019–2024",
    description: "51 talks on interfaith and intrafaith dialogue organized by Home of Harmony, Chicago. Swami Ishatmananda leads and participates in conversations on shared spiritual principles across traditions — covering Christian mysticism, Sri Ramakrishna's universal teachings, Islam, and the harmony of religions as a living experience.",
    topics: ["Interfaith", "Home of Harmony", "Universal religion", "Harmony", "Mysticism"],
    sampleEpisodes: [
      "Sri Ramakrishna's Four Teachings (Part 1)",
      "Sri Ramakrishna's Four Teachings (Part 2)",
      "An Interfaith Celebration of the Christmas Season",
      "A Global Celebration of Divine Mother"
    ]
  },

  {
    id: "home-of-harmony",
    title: "Home of Harmony Talks",
    subtitle: "Swami Ishatmananda's Interfaith Series",
    category: ["interfaith", "philosophy"],
    channel: "Chicago Vedanta",
    channelUrl: "https://www.youtube.com/@ChicagoVedanta",
    playlistUrl: "https://www.youtube.com/playlist?list=PLOEjrfhKOlHltTScza_4hsaj-ZvdYijea",
    episodes: 15,
    avgDuration: "~65 min",
    totalHours: "~16 hrs",
    status: "complete",
    featured: false,
    years: "2020–2023",
    description: "15 talks at the Home of Harmony — an interfaith center in Chicago associated with the Vivekananda Vedanta Society. Topics range from Hindu perspectives on Jesus and Christianity, to interfaith understanding, comparative spirituality, and universal principles of devotion.",
    topics: ["Interfaith", "Home of Harmony", "Hinduism", "Jesus", "Comparative religion"],
    sampleEpisodes: [
      "Lord Jesus — In the View of a Hindu Monk",
      "Interfaith Talk at Home of Harmony"
    ]
  },

  {
    id: "organization-of-gods",
    title: "Organization of Gods",
    subtitle: "Home of Harmony Series",
    category: ["interfaith", "philosophy"],
    channel: "Chicago Vedanta",
    channelUrl: "https://www.youtube.com/@ChicagoVedanta",
    playlistUrl: "https://www.youtube.com/playlist?list=PLOEjrfhKOlHm8d_Qzv-hXkB6M5xPpI6ij",
    episodes: 5,
    avgDuration: "~65 min",
    totalHours: "~5 hrs",
    status: "complete",
    featured: false,
    years: "2022–2023",
    description: "A 5-part series on the concept of divine organization — how the various deities of world religions relate to the one ultimate Reality, and what this implies for interfaith understanding and personal devotion. Delivered at the Home of Harmony, Chicago.",
    topics: ["Theology", "Interfaith", "Deities", "Monotheism", "Polytheism", "Vedanta"],
    sampleEpisodes: [
      "Organization of Gods | Part 1",
      "Organization of Gods | Part 2"
    ]
  },

  // ─── SPECIAL & GUEST LECTURES ────────────────────────────────────────────

  {
    id: "spiritual-insights-gospel",
    title: "Spiritual Insights from the Gospel",
    subtitle: "Guest Lecture — Vedanta Society of New York",
    category: ["biography"],
    channel: "Vedanta NY",
    channelUrl: "https://www.youtube.com/@VedantaNY",
    playlistUrl: "https://www.youtube.com/watch?v=TXbGfuLIVLg",
    episodes: 1,
    avgDuration: "55 min",
    totalHours: "55 min",
    status: "complete",
    featured: true,
    years: "2021",
    description: "A celebrated standalone lecture delivered at the Vedanta Society of New York in 2021 (streamed live). Swami Ishatmananda speaks on the uniqueness and supreme significance of 'The Gospel of Sri Ramakrishna' as a living spiritual scripture — its role in modern Vedanta and why it is called the Fifth Veda. Over 9,700 views.",
    topics: ["Gospel of Sri Ramakrishna", "Kathamrita", "Scripture", "Vedanta NY"],
    sampleEpisodes: [
      "Spiritual Insights from the Gospel of Sri Ramakrishna"
    ]
  },

  {
    id: "human-divine-absolute",
    title: "Human, Divine & Absolute",
    subtitle: "Guest Lecture — Vedanta Society of New York",
    category: ["philosophy"],
    channel: "Vedanta NY",
    channelUrl: "https://www.youtube.com/@VedantaNY",
    playlistUrl: "https://www.youtube.com/watch?v=1ynAi8qi2ow",
    episodes: 1,
    avgDuration: "79 min",
    totalHours: "79 min",
    status: "complete",
    featured: false,
    years: "2023",
    description: "A 79-minute guest lecture at the Vedanta Society of New York (November 2023). Swami Ishatmananda explores the three levels of reality — the human, the divine, and the Absolute — and how spiritual practice progressively reveals the deeper dimensions of our existence.",
    topics: ["Vedanta", "Brahman", "Divine", "Spiritual levels", "Advaita"],
    sampleEpisodes: [
      "Human, Divine & Absolute | Swami Ishatmananda"
    ]
  },

  {
    id: "non-vvs-talks",
    title: "Guest & Retreat Lectures",
    subtitle: "Talks Outside VVS Chicago",
    category: ["philosophy", "biography"],
    channel: "Chicago Vedanta",
    channelUrl: "https://www.youtube.com/@ChicagoVedanta",
    playlistUrl: "https://www.youtube.com/playlist?list=PLOEjrfhKOlHlxbMwUYebdikdKzRVPgErX",
    episodes: 45,
    avgDuration: "~65 min",
    totalHours: "~49 hrs",
    status: "ongoing",
    featured: false,
    years: "2021–present",
    description: "A curated collection of 45 lectures given at Vedanta centers and spiritual gatherings outside the Vivekananda Vedanta Society of Chicago — including talks at Belur Math, Pittsburgh's Ramakrishna Vedanta Ashrama, Houston, and other centers. Covers a wide range of topics from the spiritual retreat on Tapasya to Sri Ramakrishna Jayanti.",
    topics: ["Guest lectures", "Retreat", "Belur Math", "Pittsburgh", "Tapasya", "Ramakrishna Jayanti"],
    sampleEpisodes: [
      "Tapasya (Part 1) | Vedanta Society of Greater Houston",
      "Creation According to Veda",
      "Khandana Bhava Bandhana | Ramakrishna Vedanta Ashrama Pittsburgh",
      "Sri Ramakrishna Jayanti | Belur Math"
    ]
  },

  // ─── RAMKRISHNA WAY CHANNEL ──────────────────────────────────────────────

  {
    id: "ramkrishna-way-speeches",
    title: "Swami Ishatmananda Speeches",
    subtitle: "The Ramkrishna Way Channel",
    category: ["philosophy", "devotion"],
    channel: "The Ramkrishna Way",
    channelUrl: "https://www.youtube.com/@The_Ramkrishna_Way",
    playlistUrl: "https://www.youtube.com/playlist?list=PL3Dpp5A0X5n0l7BAvOcB8kZFomNx3SaBM",
    episodes: 9,
    avgDuration: "~65 min",
    totalHours: "~9 hrs",
    status: "ongoing",
    featured: false,
    years: "2022–present",
    description: "A curated playlist on The Ramkrishna Way channel featuring both English and Bengali speeches by Swami Ishatmananda. English-language highlights include the Narada Bhakti Sutra (Episode 1), the two-part Tapasya Retreat at Houston, and 'Kali is Brahman.' Also includes Bengali devotional talks.",
    topics: ["Narada Bhakti Sutra", "Tapasya", "Kali", "Devotion", "Vedanta"],
    sampleEpisodes: [
      "Narada Bhakti Sutra | Episode 1 | English discourse",
      "Tapasya: 1 | Spiritual Retreat at Vedanta Society of Greater Houston",
      "Kali is Brahman | Chicago Vedanta Society"
    ]
  },

  {
    id: "yog-vashistha-ramkrishna",
    title: "Yog Vashistha",
    subtitle: "The Ramkrishna Way — Guide to Brahma Jnana",
    category: ["philosophy", "scripture"],
    channel: "The Ramkrishna Way",
    channelUrl: "https://www.youtube.com/@The_Ramkrishna_Way",
    playlistUrl: "https://www.youtube.com/playlist?list=PL3Dpp5A0X5n34gOM7MXptQopdBaXvdkLx",
    episodes: 1,
    avgDuration: "70 min",
    totalHours: "70 min",
    status: "ongoing",
    featured: false,
    years: "2024",
    description: "The Ramkrishna Way channel's dedicated Yoga Vasistha series — currently Episode 1, titled 'Guide to Brahma Jnana.' A companion upload to the larger Chicago Vedanta Yoga Vasistha series, this episode introduces the Yoga Vasistha's method of self-inquiry leading to the direct knowledge of Brahman.",
    topics: ["Yoga Vasistha", "Brahma Jnana", "Self-inquiry", "Advaita"],
    sampleEpisodes: [
      "Yog Vashistha | Ep:1 Guide to Brahma Jnana | Swami Ishatmananda"
    ]
  }

];
