import type { Schema, Struct } from '@strapi/strapi';

export interface ClassesAditionalDetails extends Struct.ComponentSchema {
  collectionName: 'components_classes_aditional_details';
  info: {
    description: '';
    displayName: 'Additional Details';
  };
  attributes: {
    classroom: Schema.Attribute.String;
    duration: Schema.Attribute.Integer;
    schedule: Schema.Attribute.Time;
  };
}

export interface Ejercicio5Media extends Struct.ComponentSchema {
  collectionName: 'components_ejercicio5_media';
  info: {
    description: '';
    displayName: 'Imagen Galery';
  };
  attributes: {
    media: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface Ejercicio5RichText extends Struct.ComponentSchema {
  collectionName: 'components_ejercicio5_rich_texts';
  info: {
    description: '';
    displayName: 'richText';
  };
  attributes: {
    content: Schema.Attribute.RichText;
  };
}

export interface Ejercicio5Text extends Struct.ComponentSchema {
  collectionName: 'components_ejercicio5_texts';
  info: {
    description: '';
    displayName: 'List of links';
  };
  attributes: {
    tittle: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface EventosAdditionalDetails extends Struct.ComponentSchema {
  collectionName: 'components_eventos_additional_details';
  info: {
    description: '';
    displayName: 'Additional Details';
  };
  attributes: {
    date: Schema.Attribute.Date;
    hour: Schema.Attribute.Time;
    ubication: Schema.Attribute.String;
  };
}

export interface TeachersAdditionalDetails extends Struct.ComponentSchema {
  collectionName: 'components_teachers_additional_details';
  info: {
    description: '';
    displayName: 'Additional Details';
  };
  attributes: {
    experience: Schema.Attribute.Integer;
    speciality: Schema.Attribute.String;
  };
}

export interface TopicsSubtopics extends Struct.ComponentSchema {
  collectionName: 'components_topics_subtopics';
  info: {
    description: '';
    displayName: 'Subtopics';
  };
  attributes: {
    theme: Schema.Attribute.Enumeration<
      ['Theme 1', 'Theme 2', 'Theme 3', 'Theme 4', 'Theme 5']
    >;
  };
}

export interface TypesFiles extends Struct.ComponentSchema {
  collectionName: 'components_types_files';
  info: {
    displayName: 'Files';
  };
  attributes: {
    pdf: Schema.Attribute.Media<'files'>;
  };
}

export interface TypesMaterials extends Struct.ComponentSchema {
  collectionName: 'components_types_materials';
  info: {
    description: '';
    displayName: 'Imagen';
  };
  attributes: {
    imagen: Schema.Attribute.Media<'images'>;
  };
}

export interface TypesVideo extends Struct.ComponentSchema {
  collectionName: 'components_types_videos';
  info: {
    description: '';
    displayName: 'Video';
  };
  attributes: {
    video: Schema.Attribute.Media<'videos'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'classes.aditional-details': ClassesAditionalDetails;
      'ejercicio5.media': Ejercicio5Media;
      'ejercicio5.rich-text': Ejercicio5RichText;
      'ejercicio5.text': Ejercicio5Text;
      'eventos.additional-details': EventosAdditionalDetails;
      'teachers.additional-details': TeachersAdditionalDetails;
      'topics.subtopics': TopicsSubtopics;
      'types.files': TypesFiles;
      'types.materials': TypesMaterials;
      'types.video': TypesVideo;
    }
  }
}
