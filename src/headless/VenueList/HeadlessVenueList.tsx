import { FC } from 'react';
import {
  VenueListComponents,
  VenueListComponentsOverridesProp,
  VenueListProps,
} from '../../contracts/venuesList';

export type HeadlessVenueListProps = VenueListProps &
  VenueListComponents &
  VenueListComponentsOverridesProp;

export const HeadlessVenueList: FC<HeadlessVenueListProps> = ({
  Container,
  Title,
  ListContainer,
  ListItem,

  items,
  title,

  overrides,
}) => {
  return (
    <Container
      title={<Title>{title}</Title>}
      content={
        <ListContainer>
          {items.map((item) => (
            <ListItem
              {...item}
              key={item.name}
              overrides={overrides?.ListItem}
            />
          ))}
        </ListContainer>
      }
    />
  );
};
