import { ListRenderItem } from 'react-native';

export type SearchItem = {
  // title: string;
  // description: string;
  // due_date: string;
  // status: string;
  // priority: string;
  // tag_name: string;

  id: string | number,
  name:  string,
};

export interface ISearchInputProps<T> {
  data: T[];
  placeholder?: string;
  initialValue?: string;
  onSelectItem: (item: T) => void;
  renderItem: ListRenderItem<T>;
  keyExtractor: (item: T, index: number) => string;
}
