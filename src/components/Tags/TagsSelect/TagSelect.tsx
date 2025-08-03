import { View, TouchableOpacity, Text } from 'react-native';
import { useState } from 'react';

import TagButtons from '../../New/TagButton';
import ModalTag from '../../New/ModalTag';

import styles from './TagSelect.styles';
import { Spacing } from '../../../styles/Typography/typography';
import { Colors } from '../../../styles/Colors';

export interface ITagSelect {
  tag1: string;
  tag2: string;
  tag3: string;
  others: string;
}

const TagSelect = (props: ITagSelect) => {
  const { tag1, tag2, tag3, others } = props;

  const [selectedValueTag, setSelectedValueTag] = useState(null);
  const [tagName, setTagName] = useState([]);
  const [tags, setTags] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleTagsDefault = (value) => {
    setSelectedValueTag(value);
  };
  function handleTagsCreated() {
    setModalVisible(true);
  }

  return (
    <View style={styles.containerTags}>
      <View style={{ marginBottom: Spacing.s }}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.inputText}>Tags</Text>
        </TouchableOpacity>
      </View>

      <View>
        <View style={styles.tagsList}>
          <TagButtons
            toggleTags={() => handleTagsDefault(tag1)} //atualiza o useState para o valor selecionado
            isSelectedTag={selectedValueTag === tag1} //verifica se o valor existe/foi selecionado
            labelTag={tag1} //placeholder
            //bgColorButtonActive= {Colors.softOrange} //mudança de cor botão ativo
            //bgColorButton= {Colors.white} // cor padrão do botão
          />
          <TagButtons
            toggleTags={() => handleTagsDefault(tag2)}
            isSelectedTag={selectedValueTag === tag2}
            labelTag={tag2}
            //bgColorButtonActive= {Colors.green}
            //bgColorButton= {Colors.white}
          />
          <TagButtons
            toggleTags={() => handleTagsDefault(tag3)}
            isSelectedTag={selectedValueTag === tag3}
            labelTag={tag3}
            //bgColorButtonActive= {Colors.softRed}
            //bgColorButton= {Colors.white}
          />
          <TagButtons
            toggleTags={handleTagsCreated}
            isSelectedTag={selectedValueTag === others}
            labelTag={others}
            //bgColorButtonActive= {Colors.mediumGray}
            //bgColorButton= {Colors.white}

            //TODO: fix/change color button and text with Props
          />
        </View>
      </View>

      <ModalTag
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        tags={tags}
        laoding={false}
      />
    </View>
  );
};

export default TagSelect;
