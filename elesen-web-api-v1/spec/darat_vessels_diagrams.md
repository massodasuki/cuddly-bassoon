# ERD for Darat Vessels Table

```mermaid
erDiagram
    DARAT_VESSELS {
        char_36 id PK
        char_36 user_id FK
        varchar registration_number
        decimal length
        decimal width
        decimal depth
        char_36 created_by FK
        char_36 updated_by FK
        char_36 deleted_by FK
        tinyint is_active
        tinyint own_vessel
        timestamp created_at
        timestamp updated_at
        timestamp deleted_at
        varchar transportation
        tinyint is_approved
    }
    USERS ||--o{ DARAT_VESSELS : "user_id, created_by, updated_by, deleted_by"
    DARAT_VESSEL_ENGINES ||--|| DARAT_VESSELS : "vessel_id"
    DARAT_VESSEL_HULLS ||--|| DARAT_VESSELS : "vessel_id"
    DARAT_VESSEL_INSPECTIONS ||--o{ DARAT_VESSELS : "vessel_id"
    DARAT_VESSEL_HISTORIES ||--o{ DARAT_VESSELS : "vessel_id"
```

# UML Class Diagram for Darat Vessels Table

```mermaid
classDiagram
    class DaratVessels {
        +char(36) id
        +char(36) user_id
        +varchar registration_number
        +decimal length
        +decimal width
        +decimal depth
        +char(36) created_by
        +char(36) updated_by
        +char(36) deleted_by
        +tinyint is_active
        +tinyint own_vessel
        +timestamp created_at
        +timestamp updated_at
        +timestamp deleted_at
        +varchar transportation
        +tinyint is_approved
    }
    Users --> DaratVessels : user_id, created_by, updated_by, deleted_by
    DaratVesselEngines --> DaratVessels : vessel_id
    DaratVesselHulls --> DaratVessels : vessel_id
    DaratVesselInspections --> DaratVessels : vessel_id
    DaratVesselHistories --> DaratVessels : vessel_id