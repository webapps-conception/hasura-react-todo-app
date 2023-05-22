# hasura-react-todo-app
* https://dev.to/pmbanugo/how-to-build-a-graphql-app-with-hasura-postgres-and-react-c89

## Configuration de l'API GraphQL sur Hasura
Nous stockerons nos données dans une base de données Postgres et fournirons une API GraphQL qui sera utilisée pour ajouter et modifier des données. Nous utiliserons le moteur Hasura GraphQL pour provisionner une API GraphQL qui interagira avec la base de données PostgreSQL.

Nous allons créer une instance de Hasura sur Hasura Cloud. Hasura Cloud vous offre une API GraphQL distribuée à l'échelle mondiale, entièrement gérée et sécurisée en tant que service. Accédez à cloud.hasura.io/signup pour créer un compte.

Une fois connecté, vous devriez voir une page d'accueil.

Créer un nouveau projet Hasura Free.

Sélectionner la région Frankfurt, Germany (Allemagne) Google Clound, et valider.

### Créer la base de données

Lancer la console Hasura (Launch Concole).

Pour créer la table sur la console Hasura, rendez-vous dans la section de l'onglet Data et cliquez sur Connect Database, puis choisir Postgres, et cliquer sur le bouton Connect Neon Database.

Dans la fenêtre secondaire, cliquer sur Continue with Hasura, et sur Authorize.

Le schéma public doit apparaître à l'écran.

### Créer le modèle de données GraphQL

Ensuite, sur le schéma public, cliquer sur le bouton Create Table

Table name : todos
Table Comment : Todos

Columns

| Column_name | Column_type              | default_value | Nullable | Unique |
| ----------- | ------------------------ | ------------- | -------- | ------ |
| id          | Integer (auto-increment) |               | False    | True   |
| task        | Text                     |               | False    | False  |
| completed   | Boolean                  | False         | False    | False  |

Primary Keys :  id

Unique Keys est automatiquement mis à id.

Cliquer sur le bouton Add Table.

## API React
### Paramétrer l'API
Modifier les variables du fichier .env.local :

REACT_APP_HASURA_GRAPHQL_URL = '<URL de votre projet GraphQL API>'

REACT_APP_HASURA_ADMIN_SECRET = '<Mot de passe Admin Secret de votre projet>'

### Lancement de l'API
`yarn start`

Exécute l'application en mode développement.

Ouvrez [http://localhost:3000](http://localhost:3000) pour l'afficher dans votre navigateur.

### Lancement des tests
`yarn test`

Lance le testeur en mode montre interactive.

### Lancement de la compilation
`yarn build`

Génère l'application pour la production dans le dossier `build`.\
Il regroupe correctement React en mode production et optimise la construction pour les meilleures performances.

La construction est minifiée et les noms de fichiers incluent les hachages.\
Votre application est prête à être déployée !

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: il s'agit d'une opération à sens unique. Une fois que vous avez "éjecté", vous ne pouvez plus revenir en arrière !**

Si vous n'êtes pas satisfait de l'outil de construction et des choix de configuration, vous pouvez "éjecter" à tout moment. Cette commande supprimera la dépendance de construction unique de votre projet.

Au lieu de cela, il copiera tous les fichiers de configuration et les dépendances transitives (webpack, Babel, ESLint, etc.) directement dans votre projet afin que vous ayez un contrôle total sur eux. Toutes les commandes sauf `eject` fonctionneront toujours, mais elles pointeront vers les scripts copiés afin que vous puissiez les modifier. À ce stade, vous êtes seul.

Vous n'avez jamais besoin d'utiliser `eject`. L'ensemble de fonctionnalités organisé convient aux déploiements de petite et moyenne taille, et vous ne devriez pas vous sentir obligé d'utiliser cette fonctionnalité. Cependant, nous comprenons que cet outil ne serait pas utile si vous ne pouviez pas le personnaliser lorsque vous êtes prêt.
