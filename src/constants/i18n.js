import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import locale2 from 'locale2'

i18n
//  .use(XHR)
// and check https://github.com/i18next/i18next-browser-languageDetector for client side !!!
// and this https://github.com/i18next/i18next-browser-languageDetector/issues/150
  .use(initReactI18next) // if not using I18nextProvider
  .init({
    // lng: locale2.substr(0,2),
    lng: "de",
    fallbackLng: 'de',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react!!
    },

    react: {
      wait: true,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      nsMode: 'default',
    },

    resources: {
      en: {
        translation: {
          "ChVerseDelimiter":	":",
          "Chapter":	"Chapter",
          "newPassage": "New Passage",
          "BeginCh":	"Begin Chapter",
          "BeginV":	"Begin Verse",
          "EndCh":	"End Chapter",
          "EndV":	"End Verse",
          "Verse":	"Verse",
          "John":	"Gospel of John",
          "John.ImgId": "img/john-pics/VB-John1v14.jpg",
          "John.Descr": "John’s Gospel begins with a poetic introduction that places the story of Jesus within the wider story of the Word of God. A word is a form of communication, and the story stresses ways in which God speaks to the world through Jesus. \nThis Gospel helps us into the relationship of trust in God, like we were created for and which is true life. \nJesus communicates the will of God by the words he speaks, by the miracles he performs, by the death he dies in love for others, and by rising to life. The miracles recorded in John’s gospel are written that the reader would believe in Jesus and find life in His name. \nJesus appears in the role of a human being, which means that he is an example for other people to follow. As a typical human being, he possessed no extraordinary power that is not available to anyone else who asks for it and who meets the conditions for receiving it.",
          "John.1": "The Living Word of God",
          "John.1.ImgId": "img/john-pics/VB-John1v14.jpg",
          "John.2": "Cana Wedding",
          "John.2.ImgId": "img/john-pics/VB-John2v3.jpg",
          "John.3": "Nicodemus",
          "John.3.ImgId": "img/john-pics/VB-John3v2.jpg",
          "John.4": "Samaritan Woman",
          "John.4.ImgId": "img/john-pics/VB-John4v37.jpg",
          "John.5": "Lame Man Healed",
          "John.5.ImgId": "img/john-pics/VB-John5v2.jpg",
          "John.6": "Bread of Life",
          "John.6.ImgId": "img/john-pics/VB-John6v36.jpg",
          "John.7": "Rivers of Living Water",
          "John.7.ImgId": "img/john-pics/VB-John7v28.jpg",
          "John.8": "Abraham's Descendants",
          "John.8.ImgId": "img/john-pics/VB-John8v2b.jpg",
          "John.9": "Blind Man Healed",
          "John.9.ImgId": "img/john-pics/VB-John9v11b.jpg",
          "John.10": "Sheepfold-Shepherd",
          "John.10.ImgId": "img/john-pics/VB-John10v2.jpg",
          "John.11": "Lazarus",
          "John.11.ImgId": "img/john-pics/VB-John11v38b-39a.jpg",
          "John.12": "Entrance Into Jerusalem",
          "John.12.ImgId": "img/john-pics/VB-John12v2b.jpg",
          "John.13": "Foot Washing",
          "John.13.ImgId": "img/john-pics/VB-John13v18.jpg",
          "John.14": "Way-Truth-Life",
          "John.14.ImgId": "img/john-pics/VB-John14v20.jpg",
          "John.15": "Vine-Branches",
          "John.15.ImgId": "img/john-pics/VB-John15v15a.jpg",
          "John.16": "Hope that Overcomes the World",
          "John.16.ImgId": "img/john-pics/VB-John16v25.jpg",
          "John.17": "Christ to Depart",
          "John.17.ImgId": "img/john-pics/VB-John17v14.jpg",
          "John.18": "Arrest and Trials",
          "John.18.ImgId": "img/john-pics/VB-John18v24.jpg",
          "John.19": "Death for Sins",
          "John.19.ImgId": "img/john-pics/VB-John19v10.jpg",
          "John.20": "Resurrection",
          "John.20.ImgId": "img/john-pics/VB-John20v17b.jpg",
          "John.21": "Sea of Tiberius",
          "John.21.ImgId": "img/john-pics/VB-John21v15b.jpg",
          "John.1.Descr": 'The Word of God became flesh and dwelt with us. John the Baptist bore witness to him. Andrew told Simon Peter and they followed Jesus.',
          "John.2.Descr": 'Jesus turned water into wine at a wedding. He drove money-changers from the temple. He said, "Destroy this temple and I will raise it."',
          "John.3.Descr": 'Jesus told Nicodemus, "Be born again. Whoever believes in the Son will have eternal life." John the Baptist said, "He is above all."',
          "John.4.Descr": `Jesus spoke with a Samaritan woman about her husbands. She said, "Can this be the Christ?" Many believed. He healed an official's son.`,
          "John.5.Descr": 'Jesus healed a man at Bethesda. He said, "The Son only does what he sees the Father doing. My works and the Scriptures bear witness."',
          "John.6.Descr": 'Jesus fed 5,000 men and walked across the sea. He said, "I am the bread of life. My flesh is true food." Many disciples turned back.',
          "John.7.Descr": 'Jesus went to the feast. The people said, "Is this the Christ?" The chief priests tried to arrest him. He called out, "Come and drink."',
          "John.8.Descr": 'Jesus did not condemn a woman caught in adultery. The Pharisees questioned him. He said, "If God were your Father you would love me."',
          "John.9.Descr": 'Jesus healed a blind man on the Sabbath. The Pharisees called the man and threw him out. Jesus said, "I came that the blind may see."',
          "John.10.Descr": 'Jesus said, "I am the good shepherd. I give my life for the sheep." They asked, "Are you the Christ?" He said, "My sheep follow me."',
          "John.11.Descr": 'Lazarus died. Jesus went to the tomb and said, "Lazarus, come out." Lazarus came out. The chief priests plotted to put Jesus to death.',
          "John.12.Descr": 'Jesus rode into Jerusalem. The crowd shouted, "Hosanna!" He said, "The Son of Man must be lifted up. I have come to save the world."',
          "John.13.Descr": `Jesus washed the disciples' feet. He said, "One of you will betray me." Judas left. Jesus said, "Love each other as I have loved you."`,
          "John.14.Descr": '"I am the way, the truth, and the life. I am in the Father and the Father in me. He will give you the Holy Spirit. Do not be afraid."',
          "John.15.Descr": '"I am the vine, you are the branches. You are my friends if you do what I command. If they persecuted me, they will persecute you."',
          "John.16.Descr": '"The Spirit will convict the world of sin. He will guide you into all truth. Your sorrow will turn to joy. I am going to the Father."',
          "John.17.Descr": 'Jesus said, "Father, I have revealed your name to those you gave me. Sanctify them in the truth. May all who believe in me be one."',
          "John.18.Descr": 'Judas betrayed Jesus to the chief priests. Peter denied him. He was sent before Pilate. Jesus said, "My kingdom is not of this world."',
          "John.19.Descr": 'The soldiers took Jesus and crucified him. He said, "It is finished." He gave up his spirit. A soldier pierced his side with a spear.',
          "John.20.Descr": 'Mary went to the tomb and found it empty. Jesus met her. He came and stood among the disciples. Thomas said, "My Lord and my God!"',
          "John.21.Descr": 'Jesus appeared as the disciples were fishing. He said to Peter, "Do you love me? Feed my sheep." The beloved disciple has testified.',
          "John.1.1": "The Word became flesh",
          "John.1.19": "John the Baptist denies being the Messiah",
          "John.1.29": "John testifies about Jesus",
          "John.1.35": "John’s disciples follow Jesus",
          "John.1.43": "Jesus calls Philip and Nathanael",
          "John.2.1": "Jesus changes water into wine",
          "John.2.13": "Jesus clears the temple courts",
          "John.3.1": "Jesus teaches Nicodemus",
          "John.3.22": "John testifies again about Jesus",
          "John.4.1": "Jesus talks with a Samaritan woman",
          "John.4.27": "The disciples rejoin Jesus",
          "John.4.39": "Many Samaritans believe",
          "John.4.43": "Jesus heals an official’s son",
          "John.5.1": "The healing at the pool",
          "John.5.16": "The authority of the Son",
          "John.5.31": "Testimonies about Jesus",
          "John.6.1": "Jesus feeds the five thousand",
          "John.6.16": "Jesus walks on the water",
          "John.6.25": "Jesus the bread of life",
          "John.6.60": "Many disciples desert Jesus",
          "John.7.1": "Jesus goes to the Festival of Tabernacles",
          "John.7.14": "Jesus teaches at the festival",
          "John.7.25": "Division over who Jesus is",
          "John.7.45": "Unbelief of the Jewish leaders",
          "John.8.12": "Dispute over Jesus’ testimony",
          "John.8.21": "Dispute over who Jesus is",
          "John.8.31": "Dispute over whose children Jesus’ opponents are",
          "John.8.48": "Jesus’ claims about himself",
          "John.9.1": "Jesus heals a man born blind",
          "John.9.13": "The Pharisees investigate the healing",
          "John.9.35": "Spiritual blindness",
          "John.10.1": "The good shepherd and his sheep",
          "John.10.22": "Further conflict over Jesus’ claims",
          "John.11.1": "The death of Lazarus",
          "John.11.17": "Jesus comforts the sisters of Lazarus",
          "John.11.38": "Jesus raises Lazarus from the dead",
          "John.11.45": "The plot to kill Jesus",
          "John.12.1": "Jesus anointed at Bethany",
          "John.12.12": "Jesus comes to Jerusalem as king",
          "John.12.20": "Jesus predicts his death",
          "John.12.37": "Belief and unbelief among the Jews",
          "John.13.1": "Jesus washes his disciples’ feet",
          "John.13.18": "Jesus predicts his betrayal",
          "John.13.31": "Jesus predicts Peter’s denial",
          "John.14.1": "Jesus comforts his disciples",
          "John.14.5": "Jesus the way to the Father",
          "John.14.15": "Jesus promises the Holy Spirit",
          "John.15.1": "The vine and the branches",
          "John.15.18": "The world hates the disciples",
          "John.15.26": "The work of the Holy Spirit",
          "John.16.16": "The disciples’ grief will turn to joy",
          "John.17.1": "Jesus prays to be glorified",
          "John.17.6": "Jesus prays for his disciples",
          "John.17.20": "Jesus prays for all believers",
          "John.18.1": "Jesus arrested",
          "John.18.15": "Peter’s first denial",
          "John.18.19": "The high priest questions Jesus",
          "John.18.25": "Peter’s second and third denials",
          "John.18.28": "Jesus before Pilate",
          "John.19.1": "Jesus sentenced to be crucified",
          "John.19.16": "The crucifixion of Jesus",
          "John.19.28": "The death of Jesus",
          "John.19.38": "The burial of Jesus",
          "John.20.1": "The empty tomb",
          "John.20.11": "Jesus appears to Mary Magdalene",
          "John.20.19": "Jesus appears to his disciples",
          "John.20.24": "Jesus appears to Thomas",
          "John.20.30": "The purpose of John’s gospel",
          "John.21.1": "Jesus and the miraculous catch of fish",
          "John.21.15": "Jesus reinstates Peter"
        },
      },
      de: {
        translation: {
          "ChVerseDelimiter":	":",
          "Chapter":	"Kapitel",
          "newPassage": "New Passage",
          "BeginCh":	"Begin Chapter",
          "BeginV":	"Begin Verse",
          "EndCh":	"End Chapter",
          "EndV":	"End Verse",
          "Verse":	"Vers",
          "John":	"Johannes",
          "John.ImgId": "img/john-pics/VB-John1v14.jpg",
          "John.Descr": "John’s Gospel begins with a poetic introduction that places the story of Jesus within the wider story of the Word of God. A word is a form of communication, and the story stresses ways in which God speaks to the world through Jesus. \nThis Gospel helps us into the relationship of trust in God, like we were created for and which is true life. \nJesus communicates the will of God by the words he speaks, by the miracles he performs, by the death he dies in love for others, and by rising to life. The miracles recorded in John’s gospel are written that the reader would believe in Jesus and find life in His name. \nJesus appears in the role of a human being, which means that he is an example for other people to follow. As a typical human being, he possessed no extraordinary power that is not available to anyone else who asks for it and who meets the conditions for receiving it.",
          "John.1": "Das Mensch gewordene Wort Gottes",
          "John.1.ImgId": "img/john-pics/VB-John1v14.jpg",
          "John.2": "Hochzeit in Kana",
          "John.2.ImgId": "img/john-pics/VB-John2v3.jpg",
          "John.3": "Nikodemus",
          "John.3.ImgId": "img/john-pics/VB-John3v2.jpg",
          "John.4": "Die samaritanische Frau",
          "John.4.ImgId": "img/john-pics/VB-John4v37.jpg",
          "John.5": "Heilung eines Kranken",
          "John.5.ImgId": "img/john-pics/VB-John5v2.jpg",
          "John.6": "Brot des Lebens",
          "John.6.ImgId": "img/john-pics/VB-John6v36.jpg",
          "John.7": "Wasser des Lebens",
          "John.7.ImgId": "img/john-pics/VB-John7v28.jpg",
          "John.8": "Kinder Abrahams",
          "John.8.ImgId": "img/john-pics/VB-John8v2b.jpg",
          "John.9": "Heilung eines Blindgeborenen",
          "John.9.ImgId": "img/john-pics/VB-John9v11b.jpg",
          "John.10": "Der gute Hirte",
          "John.10.ImgId": "img/john-pics/VB-John10v2.jpg",
          "John.11": "Lazarus",
          "John.11.ImgId": "img/john-pics/VB-John11v38b-39a.jpg",
          "John.12": "Einzug in Jerusalem",
          "John.12.ImgId": "img/john-pics/VB-John12v2b.jpg",
          "John.13": "Fußwaschung",
          "John.13.ImgId": "img/john-pics/VB-John13v18.jpg",
          "John.14": "Der Weg, die Wahrheit und das Leben",
          "John.14.ImgId": "img/john-pics/VB-John14v20.jpg",
          "John.15": "Der Weinstock",
          "John.15.ImgId": "img/john-pics/VB-John15v15a.jpg",
          "John.16": "Das Kommen des Heiligen Geistes",
          "John.16.ImgId": "img/john-pics/VB-John16v25.jpg",
          "John.17": "Das Gebet Jesu für seine Jünger",
          "John.17.ImgId": "img/john-pics/VB-John17v14.jpg",
          "John.18": "Gefangennahme und Verurteilung",
          "John.18.ImgId": "img/john-pics/VB-John18v24.jpg",
          "John.19": "Tod",
          "John.19.ImgId": "img/john-pics/VB-John19v10.jpg",
          "John.20": "Die Auferstehung",
          "John.20.ImgId": "img/john-pics/VB-John20v17b.jpg",
          "John.21": "Am See von Tiberias",
          "John.21.ImgId": "img/john-pics/VB-John21v15b.jpg",
          "John.1.Descr": 'Das Wort Gottes wurde Fleisch und wohnte unter uns. Johannes der Täufer legt Zeugnis für ihn ab. Andreas erzählt es Simon Petrus und sie folgten Jesus.',
          "John.2.Descr": 'Jesus verwandelt bei einer Hochzeit Wasser in Wein. Er treibt Geldwechsler aus dem Tempel und sagt: "Zerstört diesen Tempel und ich werde ihn wieder aufbauen."',
          "John.3.Descr": 'Jesus sagt zu Nikodemus: "Du musst wiedergeboren werden. Wer an den Sohn glaubt, wird ewiges Leben haben." Johannes der Täufer sagt: "Er ist über allem."',
          "John.4.Descr": `Jesus spricht mit einer Samariterin über ihren Mann. Sie sagt: "Kann das der Christus sein?" Viele glauben. Er heilt den Sohn eines Beamten.`,
          "John.5.Descr": 'Jesus heilt einen Mann in Bethesda. Er sagt: „Der Sohn tut nur, was er sieht, dass der Vater tut. Meine Werke und die Schriften legen Zeugnis davon ab.“',
          "John.6.Descr": 'Jesus speist 5.000 Männer und geht über das Meer. Er sagt: „Ich bin das Brot des Lebens. Mein Fleisch ist wahre Speise.“ Viele Jünger ziehen sich zurück.',
          "John.7.Descr": 'Jesus geht zum Laubhüttenfest. Die Leute sagen: „Ist dies der Christus?“ Die Hohepriester versuchen, ihn festzunehmen. Er ruft: „Kommt und trinkt.“',
          "John.8.Descr": 'Jesus verurteilt eine Frau nicht, die beim Ehebruch ertappt wurde. Die Pharisäer befragen ihn. Er sagt: „Wenn Gott euer Vater wäre, würdet ihr mich lieben.“',
          "John.9.Descr": 'Jesus heilt am Sabbat einen Blinden. Die Pharisäer werfen diesen blinden Mann hinaus. Jesus sagt: „Ich bin gekommen, damit die Blinden sehen können.“',
          "John.10.Descr": 'Jesus sagt: „Ich bin der gute Hirte. Ich gebe mein Leben für die Schafe.“ Sie fragen: „Bist du der Christus?“ Er sagt: „Meine Schafe folgen mir.“',
          "John.11.Descr": 'Lazarus stirbt. Jesus geht zum Grab und ruft: „Lazarus, komm heraus.“ Lazarus kommt heraus. Die Hohepriester planen, Jesus zu töten.',
          "John.12.Descr": 'Jesus reitet nach Jerusalem. Die Menge ruft: „Hosianna!“ Er sagt: „Der Menschensohn muss erhöht werden. Ich bin gekommen, um die Welt zu retten.“',
          "John.13.Descr": `Jesus wischt den Jüngern die Füße. Er sagt: „Einer von euch wird mich verraten.“ Judas geht weg. Jesus sagt: „Liebt einander, wie ich euch geliebt habe.“`,
          "John.14.Descr": '„Ich bin der Weg, die Wahrheit und das Leben. Ich bin im Vater und der Vater in mir. Er wird euch den Heiligen Geist senden. Habt keine Angst.“',
          "John.15.Descr": '„Ich bin der Weinstock, ihr seid die Reben. Ihr seid meine Freunde, wenn ihr tut, was ich euch gebiete. Wie sie mich verfolgt haben, werden sie auch euch verfolgen.“',
          "John.16.Descr": '„Der Geist wird die Welt der Sünde überführen. Er wird euch in alle Wahrheit leiten. Eure Trauer wird sich in Freude verwandeln. Ich gehe zum Vater.“',
          "John.17.Descr": 'Jesus sagt: „Vater, ich habe deinen Namen denen offenbart, die du mir gegeben hast. Heilige sie in der Wahrheit. Mögen alle, die an mich glauben, eins sein.“',
          "John.18.Descr": 'Judas veratet Jesus an die Hohepriester. Petrus verleugnet ihn. Er wird vom Pilatus verurteilt. Jesus sagt: „Mein Reich ist nicht von dieser Welt.“',
          "John.19.Descr": 'Die Soldaten nehmen Jesus und kreuzigten ihn. Er sagt: „Es ist vollbracht“ und gibt seinen Geist auf. Ein Soldat durchbohrt seine Seite mit einem Speer.',
          "John.20.Descr": 'Maria geht zum Grab und findet es leer. Jesus begegnet ihr. Er kommt und zeigt sich den Jüngern. Thomas sagt: „Mein Herr und mein Gott!“',
          "John.21.Descr": 'Jesus zeigt sich nochmals, als die Jünger fischen. Er sagt zu Petrus: „Liebst du mich? Weide meine Schafe.“ Der geliebte Jünger hat dieses Zeugnis abgelegt.',
          "John.1.1": "Jesus Christus – das Mensch gewordene Wort Gottes",
          "John.1.19": "Johannes der Täufer über sich selbst",
          "John.1.29": "Johannes der Täufer über Jesus Christus",
          "John.1.35": "Die ersten Jünger Jesu",
          "John.1.43": "Philippus und Natanaël",
          "John.2.1": "Die Hochzeit in Kana",
          "John.2.13": "Der Tempel – Haus Gottes oder Kaufhaus?",
          "John.2.23": "Jesus kennt die Menschen",
          "John.3.1": "Jesus und Nikodemus: Die Notwendigkeit, von neuem geboren zu werden",
          "John.3.22": "Der Auftrag Johannes’ des Täufers und der Auftrag Jesu",
          "John.4.1": "Jesus und die samaritanische Frau: Das Wasser, das den Durst für immer löscht",
          "John.4.27": "Glaube der Samaritaner – Vom Erntefeld Gottes",
          "John.4.43": "Jesus heilt den Sohn eines königlichen Beamten",
          "John.5.1": "Heilung eines Kranken am Sabbat",
          "John.5.19": "Jesu Vollmacht: die Vollmacht des Sohnes",
          "John.5.31": "Die Glaubwürdigkeit der Aussagen Jesu über sich selbst",
          "John.6.1": "Jesus gibt einer großen Menschenmenge zu essen",
          "John.6.16": "Jesus geht auf dem Wasser",
          "John.6.22": "Die Menschenmenge sucht Jesus",
          "John.6.26": "Jesus Christus – das Brot des Lebens",
          "John.6.35": "Wer glaubt, hat ewiges Leben",
          "John.6.48": "Wer dieses Brot isst, wird leben in Ewigkeit",
          "John.6.60": "Viele Jünger wenden sich von Jesus ab",
          "John.6.67": "Das Bekenntnis des Petrus",
          "John.7.1": "Jesus lässt sich nicht zu vorzeitigem Handeln drängen",
          "John.7.10": "Jesus auf dem Laubhüttenfest in Jerusalem",
          "John.7.25": "Jesus im Widerstreit der Meinungen",
          "John.7.37": "Jesu Angebot: das Wasser des Lebens",
          "John.7.40": "Ist Jesus der Messias? Meinungsverschiedenheiten im Volk",
          "John.8.1": "Jesus und die Frau, die beim Ehebruch ertappt wurde: Freispruch statt Verurteilung",
          "John.8.12": "Jesus Christus – das Licht der Welt",
          "John.8.21": "Woher Jesus kommt und wohin er geht",
          "John.8.31": "Wirklich frei – nur durch Jesus",
          "John.8.37": "Kinder Abrahams oder Kinder des Teufels?",
          "John.8.48": "Jesus Christus – größer als Abraham",
          "John.9.1": "Heilung eines Blindgeborenen am Sabbat",
          "John.9.13": "Verhör des Geheilten durch die Pharisäer",
          "John.9.24": "Verstoßung des Geheilten",
          "John.9.35": "Das Bekenntnis des Blindgeborenen – die Blindheit der Sehenden",
          "John.10.1": "Das Bild vom Hirten und seinen Schafen",
          "John.10.7": "Jesus Christus – die Tür zu den Schafen",
          "John.10.11": "Jesus Christus – der gute Hirte",
          "John.10.22": "In der Hand des Hirten geborgen. Die Einheit von Vater und Sohn",
          "John.10.31": "Vorwurf der Gotteslästerung. Die Auseinandersetzung spitzt sich zu",
          "John.11.1": "Krankheit und Tod des Lazarus",
          "John.11.17": "Jesus Christus – die Auferstehung und das Leben",
          "John.11.28": "Jesus weint",
          "John.11.38": "Die Auferweckung des Lazarus",
          "John.11.45": "Der Beschluss des Hohen Rates: Einer muss für alle sterben",
          "John.12.1": "Die Salbung Jesu in Betanien",
          "John.12.12": "Der Einzug in Jerusalem",
          "John.12.20": "Menschen nichtjüdischer Herkunft wollen Jesus sehen",
          "John.12.27": "Jesus kündigt seinen Tod an",
          "John.12.37": "Rückblick auf Jesu öffentliches Wirken: Der Unglaube des jüdischen Volkes",
          "John.12.42": "Folgen des Glaubens und des Unglaubens",
          "John.13.1": "Jesus wäscht seinen Jüngern die Füße",
          "John.13.12": "Die Bedeutung der Fußwaschung",
          "John.13.21": "Ankündigung des Verrats",
          "John.13.31": "Die Herrlichkeit des Menschensohnes und die Herrlichkeit Gottes",
          "John.13.33": "Das neue Gebot",
          "John.13.36": "Jesus kündigt an, dass Petrus ihn verleugnen wird",
          "John.14.1": "Jesus Christus – der Weg zum Vater",
          "John.14.8": "Wer den Sohn sieht, sieht den Vater",
          "John.14.15": "Der Heilige Geist – Jesu Stellvertreter",
          "John.14.25": 'Jesus sagt: "Steht auf, wir wollen von hier weggehen!"',
          "John.15.1": "Jesus Christus – der Weinstock",
          "John.15.9": "In der Liebe Jesu bleiben",
          "John.15.18": "Der Hass der Welt auf die Jünger Jesu",
          "John.16.4": "Das Wirken des Heiligen Geistes",
          "John.16.5": "Das Wirken des Heiligen Geistes",
          "John.16.16": "Die Traurigkeit der Jünger wird sich in Freude verwandeln",
          "John.16.25": "Jesu Sieg über die Welt",
          "John.17.1": "Jesus betet … … für sich selbst",
          "John.17.6": "… für seine Jünger",
          "John.17.20": "… für alle, die an ihn glauben werden",
          "John.18.1": "Die Gefangennahme Jesu",
          "John.18.12": "Jesus vor Hannas",
          "John.18.15": "Petrus verleugnet Jesus",
          "John.18.19": "Das Verhör vor dem Hohenpriester",
          "John.18.25": "Petrus verleugnet Jesus noch einmal",
          "John.18.28": "Jesus vor Pilatus",
          "John.18.38": "Die Verurteilung Jesu",
          "John.19.1": "Jesus wird von den Soldaten misshandelt und verspottet",
          "John.19.6": "Jesus antwortet Pilatus nicht",
          "John.19.16": "Die Kreuzigung Jesu",
          "John.19.17": "Die Kreuzigung Jesu",
          "John.19.28": "Der Tod Jesu",
          "John.19.31": "»Der, den sie durchbohrt haben«",
          "John.19.38": "Das Begräbnis Jesu",
          "John.20.1": "Das leere Grab: Jesus ist auferstanden",
          "John.20.10": "Der Auferstandene erscheint Maria aus Magdala",
          "John.20.19": "Der Auferstandene erscheint den Jüngern",
          "John.20.24": "Jesus und Thomas: Vom Unglauben zur Anbetung",
          "John.20.30": "Warum dieses Buch geschrieben wurde",
          "John.21.1": "Der Auferstandene erscheint seinen Jüngern am See von Tiberias",
          "John.21.15": "Jesus und Petrus: Erneuertes Vertrauen",
          "John.21.20": "Petrus und der Jünger, den Jesus besonders liebte: Unterschiedliche Wege in der Nachfolge",
          "John.21.24": "Schlusswort",          
        },
      },
    },
  })

export default i18n
