export const mnistDiagram = `graph TD
    Client[REST Client] --> API[Spring Boot Controller]
    API --> Service[Classification Service]
    Service --> TF[TensorFlow C API]
    TF --> Model[MNIST .pb Model]
    TF --> Output[JSON Result]
    subgraph "Docker Container"
    Service
    TF
    Model
    end`;

export const simityDiagram = `graph TD
    User[User CLI] -->|Passes path and mode| ArgParse[Argparse]

    subgraph Ingestion[Notebook Ingestion]
        ArgParse -->|Path| FileScanner[Glob scanner]
        FileScanner -->|Notebook files| FilterCheckpoints[Filter checkpoints]
        FilterCheckpoints -->|File paths| ContentExtractor[Extract content]
    end

    subgraph Processing[Content Processing]
        ContentExtractor -->|Open file| JsonParser[JSON parser]
        JsonParser -->|Iterate cells| CellFilter{Mode filter}

        CellFilter -->|Markdown mode| MkExtract[Extract markdown]
        CellFilter -->|Code mode| CodeExtract[Extract code]
        CellFilter -->|All mode| AllExtract[Combine code and markdown]

        MkExtract --> Aggregator[Aggregate text and folder labels]
        CodeExtract --> Aggregator
        AllExtract --> Aggregator
    end

    subgraph Analysis[Embedding and Similarity Analysis]
        Aggregator -->|Text documents| Embedder[SentenceTransformer all mpnet base v2]
        Embedder -->|Dense vectors| EmbedMatrix[Embeddings matrix]

        EmbedMatrix -->|Cosine similarity| SimMetric[Scikit learn]
        SimMetric -->|Diagonal set to zero| SimMatrix[Similarity matrix]
    end

    subgraph OutputViz[Output and Visualization]
        SimMatrix -->|Score over threshold| PairFinder[High similarity filter]
        PairFinder -->|Print| CliOut[CLI output top similarities]

        SimMatrix -->|Convert to dataframe| HeatmapGen[Seaborn heatmap]
        HeatmapGen -->|Save png| FileOut[similarity heatmap image]
        HeatmapGen -->|Display| GuiOut[Matplotlib window]
    end

    style Ingestion fill:#f9f6ff,stroke:#8a4fff,stroke-width:2px;
    style Processing fill:#f6fff5,stroke:#28a745,stroke-width:2px;
    style Analysis fill:#fffbeb,stroke:#ffc107,stroke-width:2px;
    style OutputViz fill:#f1f8ff,stroke:#0366d6,stroke-width:2px;`;

export const foliaDiagram = `graph TD
    User[Resident] -->|Reports| App[Folia Web App]
    App -->|Store| DB[(Supabase)]
    ClimData[OpenWeather API] -->|Sync| App
    App -->|Visualize| Map[Mapbox SDK]`;

export const gitStatsDiagram = `graph LR
    Log[git log --numstat] -->|Upload| Streamlit[Streamlit App]
    Streamlit -->|Regex| Parser[Log Parser]
    Parser -->|DataFrame| Pandas[Pandas Analysis]
    Pandas -->|Plots| Plotly[Plotly Dashboard]`;

export const avpDiagram = `graph TD
    A[User CLI] -->|Runs main.py| B{Check play flag}
    
    %% Branch 1: Single Window Spawning
    B -->|False default| C[open terminal and play]
    C --> D[Identify Terminal]
    D -->|Linux Mac| E[Kitty or xterm]
    D -->|Windows| F[cmd.exe]
    E --> G[Spawn new terminal with play mode]
    F --> G
    G -->|Recursion| B
    
    %% Branch 2: Direct Play Mode
    B -->|True| H[play_video]
    H --> I[cv2.VideoCapture]
    I --> J[Loop: Frame by Frame]
    
    J --> K[Read Frame]
    K --> L{Success?}
    L -->|No| M[End Playback]
    L -->|Yes| N[cv2.cvtColor to Grayscale]
    
    N --> O[frame_to_ascii]
    O --> P[Get Terminal Size]
    P --> Q[cv2.resize Frame]
    Q --> R[Map Pixels to ASCII_CHARS]
    R --> S[Join to String]
    
    S --> T[Clear Screen]
    T --> U[Print ASCII Art]
    U --> V[Sleep for Accuracy]
    V --> J
`;

export const sifrDiagram = `graph TD
    Reviewer[Reviewer] --> Dashboard[Dashboard and Review]

    subgraph UI[Streamlit UI]
        Dashboard
        Page1[Grades Overview]
        Page2[Review Verification]
        Page3[Error Codes]
        Page4[Settings and Upload]
    end

    subgraph Logic[Python Application Logic]
        DBHelpers[db helpers]
        ReviewState[review state]
        AnswerSheet[answer sheet]
        Utils[utilities]
    end

    subgraph Data[Data Layer]
        DB[(SQLite grading db)]
        FS[(Filesystem archives refs pdfs)]
    end

    Dashboard --> ReviewState
    Dashboard --> DBHelpers
    Dashboard --> AnswerSheet
    Dashboard --> Utils

    Page1 --> DBHelpers
    Page2 --> DBHelpers
    Page3 --> DBHelpers
    Page4 --> DBHelpers
    Page4 --> FS

    DBHelpers --> DB
    ReviewState --> DBHelpers
    AnswerSheet --> DBHelpers

    Upload[Archive uploads] --> Page4
    Dashboard --> FeedbackPDF[Feedback PDFs]
    FeedbackPDF --> FS
`;
