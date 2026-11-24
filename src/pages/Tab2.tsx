import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonBreadcrumbs, IonBreadcrumb, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonLabel, IonItem } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className='contato'>CONTATO</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Contato</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer name="Tab 2 page" /> */}
      </IonContent>
      <IonCard>
            <IonBreadcrumbs>
                <IonBreadcrumb href="#home">Home</IonBreadcrumb>
                <IonBreadcrumb href="#contato">Contato</IonBreadcrumb>
            </IonBreadcrumbs>
            <IonCardHeader>
              {/* <IonCardTitle className='titulo'>Título do cartão</IonCardTitle> */}
              {/* <IonCardSubtitle>Subtítulo do cartão</IonCardSubtitle> */}
            </IonCardHeader>
      
            <IonCardContent>Para outros tipos de projetos entre em contato ou faça uma visita.</IonCardContent>
      </IonCard>
      <IonList>
      <IonItem>
        <IonLabel>Avenida do código, 2000, Centro, Cidade Tecnológica</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>+xx (xx) xxxxx-xxxx</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>tecno@logica.com</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>tecnologica.com</IonLabel>
      </IonItem>
    </IonList>
    </IonPage>
  );
};

export default Tab2;
