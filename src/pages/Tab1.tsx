import { IonContent, IonAvatar, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonSearchbar, IonBreadcrumbs, IonBreadcrumb, IonAccordionGroup, IonAccordion, IonItem, IonLabel } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="apresentacao">APRESENTAÇÃO</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader className="cabecalho" collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Apresentação</IonTitle>
          </IonToolbar>
          <IonAvatar>
            {/* <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" /> */}
            <img src="img/tecnologica1.png" alt="Fonte: Canva" />
          </IonAvatar>
        </IonHeader>
        {/* <ExploreContainer name="Tab 1 page" /> */}
        <IonCard>
      <IonCardHeader>
        <IonCardTitle className='titulo'>Tecno Lógica</IonCardTitle>
        {/* <IonCardSubtitle>Subtítulo do cartão</IonCardSubtitle> */}
      </IonCardHeader>

      <IonCardContent>Programando um mundo melhor.</IonCardContent>
    </IonCard>
    <IonSearchbar></IonSearchbar>
    <IonBreadcrumbs>
      <IonBreadcrumb href="#home">Home</IonBreadcrumb>
      <IonBreadcrumb href="#contato">Contato</IonBreadcrumb>
    </IonBreadcrumbs>
    <IonAccordionGroup>
      <IonAccordion value="first">
        <IonItem slot="header" color="light">
          <IonLabel className="somos">Somos</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          comprometidos com a sua ideia
        </div>
      </IonAccordion>
      <IonAccordion value="second">
        <IonItem slot="header" color="light">
          <IonLabel className="fazemos">Fazemos</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          por acreditar que é possível
        </div>
      </IonAccordion>
      <IonAccordion value="third">
        <IonItem slot="header" color="light">
          <IonLabel className="alcancamos">Alcançamos</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          resultados que fazem a diferença
        </div>
      </IonAccordion>
    </IonAccordionGroup>
    </IonContent>
    </IonPage>
  );
};

export default Tab1;
