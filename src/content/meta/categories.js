import SettingsIcon from 'react-feather/dist/icons/settings';
import GitBranchIcon from 'react-feather/dist/icons/git-branch';
import ImageIcon from 'react-feather/dist/icons/image';
import FolderPlusIcon from 'react-feather/dist/icons/folder-plus';

export const categories = [
  { name: 'projects', label: 'Projects', icon: SettingsIcon },
  { name: 'til', label: 'TIL', icon: GitBranchIcon },
  { name: 'contents', label: 'Contents', icon: ImageIcon },
  { name: 'etc', label: 'Etc.', icon: FolderPlusIcon }
];

export default categories;
