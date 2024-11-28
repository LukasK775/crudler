import { useState } from "react";
import { LogBox, StyleSheet } from "react-native";
import Screen from "../layout/Screens";
import ModuleList from "../entity/modules/ModuleList.js";
import initialModules from "../../data/modules.js";

const ModuleListScreen = ({ navigation }) => {
  // Initialisations
  LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state",
  ]);

  // State
  const [modules, setModules] = useState(initialModules);

  // Handlers
  const handleSelect = (module) =>
    navigation.navigate("ModuleViewScreen", { module, onDelete });

  const handleDelete = (module) =>
    setModules(modules.filter((item) => item.ModuleID !== module.ModuleID));

  const onDelete = (module) => {
    handleDelete(module);
    navigation.goBack();
  };

  // View
  return (
    <Screen>
      <ModuleList modules={modules} onSelect={handleSelect} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleListScreen;
