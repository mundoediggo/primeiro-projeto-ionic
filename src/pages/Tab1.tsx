import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonBreadcrumb, IonBreadcrumbs, IonSearchbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
        <IonCard>
      <IonCardHeader>
        <IonCardTitle>Título do cartão</IonCardTitle>
        <IonCardSubtitle>Subtítulo do cartão</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Pequena descrição do cartão.</IonCardContent>
    </IonCard>
    <IonBreadcrumbs>
      <IonBreadcrumb href="#home">Início</IonBreadcrumb>
      <IonBreadcrumb href="#electronics">Eletrônicos</IonBreadcrumb>
      <IonBreadcrumb href="#cameras">Câmeras</IonBreadcrumb>
      <IonBreadcrumb href="#film">Filme</IonBreadcrumb>
    </IonBreadcrumbs>
    <IonSearchbar></IonSearchbar>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
